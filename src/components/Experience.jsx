import React from "react";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 p-16">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div className="px-20">
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full  lg:w-1/2 px-8 sm:p-8">
            <p className="mb-2 text-sm text-neutral-300 w-3/4 text-start lg:text-end">
              August 2022 - September 2025
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-8 sm:p-8">
            <h6 className="mb-2 font-semibold">
              Front-End Developer -
              <span className="text-sm text-purple-100">
                11 Solutions Private Limited.
              </span>
            </h6>
            <p className="mb-4 text-neutral-400">
              React.js–focused Front-End Developer with hands-on experience
              building scalable, responsive, and component-based user interfaces
              for modern web applications. Strong expertise in developing
              reusable React components, managing application state, and
              implementing clean UI architectures that enhance performance and
              user experience.
            </p>

            <p className="mb-4 text-neutral-400">
              Experienced in integrating frontend applications with RESTful APIs
              built using ASP.NET Core, ensuring seamless communication between
              the client and server. Worked with SQL databases for basic data
              operations, including querying and handling application data to
              support frontend functionality.
            </p>

            <p className="text-neutral-400">
              Passionate about writing clean, maintainable, and well-structured
              code by following modern frontend best practices. Continuously
              learning new technologies and improving UI/UX and performance to
              deliver reliable, user-friendly applications.
            </p>

            <div className="flex flex-wrap gap-0">
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                HTML5
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                CSS3
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                Tailwind CSS
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                JavaScript ES6+
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                TypeScript
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                React.js
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                Sql
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
