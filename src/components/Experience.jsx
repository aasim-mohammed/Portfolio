import React from "react";

const Experience = () => {
  return (
  <div className="border-b border-neutral-900 pb-10 px-4 sm:px-8 lg:px-16">
    <h2 className="my-10 sm:my-16 text-center text-3xl sm:text-4xl">
      Experience
    </h2>

    <div className="max-w-6xl mx-auto">
      <div className="mb-8 flex flex-col lg:flex-row lg:justify-center">
        
        <div className="w-full lg:w-1/2 px-2 sm:px-4 mb-4 lg:mb-0">
          <p className="text-sm text-neutral-300 text-center lg:text-center">
            August 2022 – September 2025
          </p>
        </div>

        <div className="w-full lg:w-1/2 px-2 sm:px-4">
          <h6 className="mb-2 font-semibold text-center lg:text-left">
            Front-End Developer –{" "}
            <span className="text-sm text-purple-100">
              11 Solutions Private Limited
            </span>
          </h6>

          <p className="mb-4 text-neutral-400 text-sm sm:text-base text-center lg:text-left">
            React.js–focused Front-End Developer with hands-on experience
            building scalable, responsive, and component-based user interfaces
            for modern web applications.
          </p>

          <p className="mb-4 text-neutral-400 text-sm sm:text-base text-center lg:text-left">
            Experienced in integrating frontend applications with RESTful APIs
            built using ASP.NET Core and working with SQL databases for basic
            data operations.
          </p>

          <p className="text-neutral-400 text-sm sm:text-base text-center lg:text-left">
            Passionate about writing clean, maintainable code and continuously
            improving UI/UX and performance.
          </p>

          <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
            {[
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "JavaScript ES6+",
              "TypeScript",
              "React.js",
              "SQL",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded bg-neutral-900 px-2 py-1 text-sm text-purple-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Experience;
