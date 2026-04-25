import { GovernmentScheme, schemesDatabase } from "./schemes-database";

// Simple cosine similarity function
function cosineSimilarity(vecA: number[], vecB: number[]) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// Global cache for scheme embeddings to save API calls
let schemeEmbeddingsCache: { scheme: GovernmentScheme; embedding: number[] }[] | null = null;

export async function semanticSearchSchemes(query: string, apiKey: string): Promise<GovernmentScheme[]> {
  try {
    const url = "https://api.openai.com/v1/embeddings";

    // 1. If we haven't embedded the database yet, do it once and cache it
    if (!schemeEmbeddingsCache) {
      const textsToEmbed = schemesDatabase.map(
        (s) => `${s.name} ${s.nameHi} ${s.category} ${s.description} ${s.eligibility.join(" ")} ${s.tags.join(" ")}`
      );

      const dbRes = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify({
          model: "text-embedding-3-small",
          input: textsToEmbed,
        }),
      });

      if (!dbRes.ok) throw new Error("Failed to generate DB embeddings");
      const dbData = await dbRes.json();
      
      schemeEmbeddingsCache = schemesDatabase.map((scheme, index) => ({
        scheme,
        embedding: dbData.data[index].embedding,
      }));
    }

    // 2. Embed the user's query
    const queryRes = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "text-embedding-3-small",
        input: query,
      }),
    });

    if (!queryRes.ok) throw new Error("Failed to generate query embedding");
    const queryData = await queryRes.json();
    const queryVector = queryData.data[0].embedding;

    // 3. Calculate similarity and rank
    const scoredSchemes = schemeEmbeddingsCache.map((item) => {
      const score = cosineSimilarity(queryVector, item.embedding);
      return { scheme: item.scheme, score };
    });

    // 4. Sort by highest score first and filter by a reasonable threshold (e.g., 0.25)
    return scoredSchemes
      .filter((s) => s.score > 0.25)
      .sort((a, b) => b.score - a.score)
      .map((s) => s.scheme);

  } catch (error) {
    console.error("Semantic search failed:", error);
    // Fallback to empty array if embedding fails
    return [];
  }
}
