import React from 'react';

const Experience = ({ company, position, duration, description }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src="/work-experience-image.jpg" alt="Work Experience" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{company}</div>
          <p className="block mt-1 text-lg leading-tight font-medium text-black">{position}</p>
          <p className="mt-2 text-gray-500">{duration}</p>
          <p className="mt-2 text-gray-900">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
