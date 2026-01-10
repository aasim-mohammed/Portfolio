import React from "react";
import weather from "../assets/weather.jpg";
import snake from "../assets/snakelogo.png";
import wsc from "../assets/wsc.png";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 p-16">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        <div className="flex flex-wrap lg:justify-center">
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img
              className="mb-6 cursor-pointer rounded-3xl
                         transition-all duration-300 ease-out
                         hover:scale-105
                         hover:-translate-y-2
                         hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              src={snake}
              width={150}
              height={150}
              alt="snake"
              onClick={() =>
                window.open(
                  "https://aasim-mohammed.github.io/snake-game/",
                  "_blank"
                )
              }
            />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">JS Snake Game</h6>
            <p className="mb-4 text-neutral-400">
              I have created a classic Snake game implemented using HTML, CSS,
              and JavaScript, featuring smooth animations, dynamic food
              spawning, and increasing difficulty as the snake grows. The game
              includes real-time score tracking and responsive controls for an
              engaging user experience.
            </p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              HTML
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              CSS
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              JavaScript
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap lg:justify-center mt-16">
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img
              className="mb-6 cursor-pointer rounded-3xl
                         transition-all duration-300 ease-out
                         hover:scale-105
                         hover:-translate-y-2
                         hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              src={wsc}
              width={150}
              height={150}
              alt="wsc"
              onClick={() =>
                window.open(
                  "https://github.com/aasim-mohammed/website-security-status",
                  "_blank"
                )
              }
            />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">
              Website Security Status (Browser Extension)
            </h6>
            <p className="mb-4 text-neutral-400">
              Developed a browser extension that evaluates the safety of any
              website in real time by scanning it through the VirusTotal
              database. The extension detects whether a visited website is safe
              or unsafe and displays a simple, user-friendly security status
              directly in the browser toolbar.
            </p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              React
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              Tailwind CSS
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              VirusTotal API
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              Chrome Extension APIs (Manifest v3)
            </span>
          </div>
        </div>

        <div className="flex flex-wrap lg:justify-center mt-16">
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img
              className="mb-6 cursor-pointer rounded-3xl
                         transition-all duration-300 ease-out
                         hover:scale-105
                         hover:-translate-y-2
                         hover:shadow-[0_0_25px_rgba(168,85,247,0.6)]"
              src={weather}
              width={150}
              height={150}
              alt="weather"
              onClick={() =>
                window.open(
                  "https://aasim-mohammed.github.io/weather-app-react",
                  "_blank"
                )
              }
            />
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <h6 className="mb-2 font-semibold">Wheather App</h6>
            <p className="mb-4 text-neutral-400">
              I developed a Weather App using React, designed to provide users
              with up-to-date weather information for any location worldwide.
              The app features a clean and intuitive user interface, making it
              easy for users to check the current weather conditions, forecast,
              and other weather-related details.
            </p>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              React
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              CSS
            </span>
            <span className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-md text-purple-400">
              OpenWeather API
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
