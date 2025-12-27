import React from "react";
import './page-heading.css';

interface PageHeadingProps {
  firstWord: string;
  secondWord: string;
  className?: string;
}

export const PageHeading = ({ firstWord, secondWord, className = "" }: PageHeadingProps) => {
  return (
    <h1 className={`page-heading ${className}`}>
      <span className="page-heading-first">{firstWord}</span>{' '}
      <span className="page-heading-second">{secondWord}</span>
    </h1>
  );
};

