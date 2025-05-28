"use client";

import { useState } from "react";
import Link from "next/link";

import {
  faChevronDown,
  faChevronUp,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProjectProps {
  title: string;
  description: string;
  link?: string;
}

export default function Project(props: ProjectProps) {
  const { title, description, link } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden transition-all duration-200 hover:border-gray-300">
      <div className="p-3 hover:bg-gray-50 transition-colors duration-200">
        <div className="flex justify-between items-center">
          <div className="font-bold text-base md:text-lg pr-4">{title}</div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer text-sm text-gray-500 border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-100 hover:border-gray-400 transition-all duration-200 flex-shrink-0"
            aria-label={
              isOpen ? "Collapse project details" : "Expand project details"
            }
          >
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              className="w-3 h-3"
            />
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 py-3 text-gray-700 text-sm md:text-base leading-relaxed">
          {description}
        </div>
        {link && (
          <div className="px-3 pb-3 flex justify-end">
            <Link
              href={link}
              className="inline-block text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Project"
            >
              <div className="flex flex-row items-center gap-2 border border-gray-300 rounded-md px-3 py-2 w-fit hover:bg-gray-50 transition-colors duration-200">
                <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                <span className="text-sm font-medium">View</span>
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
