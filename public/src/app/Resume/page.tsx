"use client";
import React from 'react';

const Resume = () => {
  const printPDF = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto p-6 font-sans bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Parveen Jatoi</h1>
      <p className="text-center text-gray-600 mb-8">Software Developer | parveen.jatoi@gmail.com | (123) 456-7890</p>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2 border-gray-200 mb-4">Summary</h2>
        <p className="text-gray-600 leading-relaxed">
          Experienced software developer with a strong background in web development, particularly in React, Next.js, and TypeScript. Proven ability to create efficient, scalable, and user-friendly web applications.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2 border-gray-200 mb-4">Experience</h2>
        
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Frontend Developer, ABC Corp</h3>
          <p className="text-gray-500 italic">Jan 2024 - Present</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Developed responsive and accessible web applications using React and Next.js.</li>
            <li>Collaborated with a team to design new features and optimize application performance.</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Internee, XYZ Inc</h3>
          <p className="text-gray-500 italic">July 2024 -</p>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Assisted in the development of internal tools and applications using JavaScript and HTML/CSS.</li>
            <li>Fixed bugs and implemented minor features based on team feedback.</li>
          </ul>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 border-b-2 pb-2 border-gray-200 mb-4">Education</h2>
        <p className="text-gray-800 font-semibold">Bachelor of Arts, University of Karachi</p>
        <p className="text-gray-500 italic">Graduated: 2012</p>
      </section>

      <button
        onClick={printPDF}
        className="block mx-auto mt-6 bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default Resume;