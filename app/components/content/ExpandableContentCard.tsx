"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface ExpandableContentCardProps {
  title: string;
  children: React.ReactNode;
}

export default function ExpandableContentCard(
  props: ExpandableContentCardProps
) {
  const { title, children } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border bg-brand-background border-brand-secondary rounded-md overflow-hidden transition-all duration-200">
      <button
        className="py-3 px-4 transition-colors duration-200 cursor-pointer bg-brand-tag hover:bg-brand-secondary w-full"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={
          isOpen ? "Collapse project details" : "Expand project details"
        }
      >
        <div className="flex justify-between items-center">
          <div className="font-bold text-base md:text-lg pr-4">{title}</div>

          <FontAwesomeIcon
            icon={isOpen ? faChevronUp : faChevronDown}
            className="w-3 h-3"
          />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-none opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
