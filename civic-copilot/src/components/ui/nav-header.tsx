"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface NavHeaderProps {
  onNavigate?: (section: string) => void;
}

function NavHeader({ onNavigate }: NavHeaderProps) {
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const tabs = ["Home", "Chat", "Schemes", "Features", "FAQ"];

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-md p-1"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {tabs.map((tab) => (
        <Tab key={tab} setPosition={setPosition} onClick={() => onNavigate?.(tab.toLowerCase())}>
          {tab}
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  onClick,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({ width, opacity: 1, left: ref.current.offsetLeft });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base font-medium tracking-wide"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { position: { left: number; width: number; opacity: number } }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-7 rounded-full bg-white md:h-12"
    />
  );
};

export default NavHeader;
