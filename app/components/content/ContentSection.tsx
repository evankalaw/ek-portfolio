"use client";

import { useState } from "react";

interface ContentSectionProps {
  title: string;
}

export default function ContentSection(props: ContentSectionProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { title } = props;

  return (
    <div>
      <button
        className="hover:underline cursor-pointer"
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {title}
      </button>
      <div className={isExpanded ? "block" : "hidden"}>This is my content.</div>
    </div>
  );
}
