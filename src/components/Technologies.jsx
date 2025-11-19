import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiWireshark } from "react-icons/si";
import { DiGit } from "react-icons/di";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 ">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div
          onClick={() => (
            (window.location.href =
              "https://developer.mozilla.org/en-US/docs/Web/HTML"),
            "_blank"
          )}
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-400 transition-all duration-300 hover:cursor-pointer"
        >
          <RiHtml5Line className="text-7xl text-orange-600" title="HTML5" />
        </div>
        <div
          onClick={() => (
            (window.location.href =
              "https://developer.mozilla.org/en-US/docs/Web/CSS"),
            "_blank"
          )}
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-400 transition-all duration-300 hover:cursor-pointer"
        >
          <RiCss3Line className="text-7xl text-blue-600" title="CSS3" />
        </div>
        <div
          onClick={() => (
            (window.location.href = "https://tailwindcss.com/"), "_blank"
          )}
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-400 transition-all duration-300 hover:cursor-pointer"
        >
          <RiTailwindCssLine
            className="text-7xl text-teal-400"
            title="Tailwind CSS"
          />
        </div>
        <div
          onClick={() => (
            (window.location.href =
              "https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity"),
            "_blank"
          )}
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-400 transition-all duration-300 hover:cursor-pointer"
        >
          <RiJavascriptLine
            className="text-7xl text-yellow-500"
            title="JavaScript"
          />
        </div>
        <div
          onClick={() => (
            (window.location.href = "https://react.dev/"), "_blank"
          )}
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-400 transition-all duration-300 hover:cursor-pointer"
        >
          <RiReactjsLine className="text-7xl text-cyan-500" title="React" />
        </div>
        <div
          onClick={() => (
            (window.location.href = "https://www.wireshark.org/"), "_blank"
          )}
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-400 transition-all duration-300 hover:cursor-pointer"
        >
          <SiWireshark
            className="text-7xl"
            style={{ color: "#1679A7" }}
            title="Wireshark"
          />
        </div>
        <div
          onClick={() => (
            (window.location.href = "https://git-scm.com/"), "_blank"
          )}
          className="rounded-2xl border-4 border-neutral-800 p-4 hover:border-neutral-400 transition-all duration-300 hover:cursor-pointer"
        >
          <DiGit
            className="text-7xl"
            style={{ color: "#F1502F" }}
            title="Git"
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
