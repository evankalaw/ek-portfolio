"use client";

import { useState } from "react";
import Link from "next/link";

import {
  faChevronDown,
  faChevronUp,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechnologyRow from "./TechnologyRow";
import { ProjectType } from "@/lib/types";

interface ProjectProps {
  project: ProjectType;
}

export default function Project(props: ProjectProps) {
  const { project } = props;
  const { title, description, link, technologies } = project;

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
        <div className="px-3 py-3 text-brand-text text-sm md:text-base leading-relaxed whitespace-normal">
          {description.split("\n\n").map((paragraph, index) => (
            <p key={index} className={index > 0 ? "mt-4" : ""}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-row justify-between items-center">
          {technologies && (
            <div className="px-3 pb-3">
              <TechnologyRow technologies={technologies} />
            </div>
          )}
          {link && (
            <div className="px-3 pb-3 flex justify-end">
              <Link
                href={link}
                className="inline-block text-brand-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Project"
              >
                <div className="flex flex-row items-center gap-2 border border-brand-secondary rounded-md px-3 py-2 w-fit hover:bg-brand-tag transition-colors duration-200">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="w-3 h-3"
                  />
                  <span className="text-sm font-medium">View</span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
