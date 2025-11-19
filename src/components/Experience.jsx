import React from "react";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 p-16">
      <h2 className="my-20 text-center text-4xl">Experience</h2>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full  lg:w-1/2 px-8 sm:p-8">
            <p className="mb-2 text-sm text-neutral-300 w-3/4 text-start lg:text-end">
              March 2023 - April 2024
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-8 sm:p-8">
            <h6 className="mb-2 font-semibold">
              Associate Customer Support -
              <span className="text-sm text-purple-100">
                Sutherland Global Services.
              </span>
            </h6>
            <p className="mb-4 text-neutral-400">
              As an Associate Customer Support, I was dedicated to providing
              outstanding service to our customers. My role involved handling
              inquiries, resolving issues, and ensuring a positive customer
              experience. I responded to customer requests via phone, email, and
              chat, requiring empathy, patience, and effective problem-solving
              skills to address customer needs efficiently and professionally
            </p>
          </div>
        </div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <div className="w-full  lg:w-1/2 px-8 sm:p-8">
            <p className="mb-2 text-sm text-neutral-300 w-3/4 text-start lg:text-end">
              July 2024 - July 2025
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
              React-focused Full-Stack Developer with strong frontend skills and
              working knowledge of ASP.NET Core for backend development.
              Experienced in building responsive, component-based UIs and
              integrating them with backend APIs. Continuously improving backend
              skills, with a focus on delivering cohesive, user-friendly
              applications. Dedicated to writing clean, maintainable code and
              learning new technologies
            </p>
            <div className="flex flex-wrap gap-0">
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                HTML
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                CSS
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                Tailwind
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                JavaScript
              </span>
              <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
                React
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
