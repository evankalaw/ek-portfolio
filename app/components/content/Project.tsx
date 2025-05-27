"use client";

import { useState } from "react";

import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Project {
  title: string;
  description: string;
}

export default function Project(props: Project) {
  const { title, description } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-3 hover:bg-gray-100 rounded-md">
      <div className="flex justify-between items-center">
        <div className="font-bold">{title}</div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-sm text-gray-500 border border-gray-300 rounded-md px-2 py-1"
        >
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </button>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} mt-2`}>{description}</div>
    </div>
  );
}
