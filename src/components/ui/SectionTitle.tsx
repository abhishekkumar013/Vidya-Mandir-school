import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl relative inline-block">
        {title}
        <span className="absolute -bottom-2 left-0 w-full h-1 bg-indigo-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
      {subtitle.split("|").map((line, idx) => (
        <div
          key={idx}
          className={idx === 1 ? "font-semibold text-indigo-600" : ""}
        >
          {line}
        </div>
      ))}
    </div>
  );
};

export default SectionTitle;
