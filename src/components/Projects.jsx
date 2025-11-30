import React from "react";
import weather from "../assets/weather.jpg";
import snake from "../assets/snakelogo.png";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 p-16">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        <div className="flex flex-wrap lg:justify-center">
          {/* <div className="w-full lg:w-1/4"> */}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img
              className="rounded-3xl mb-6 cursor-pointer"
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
          {/* <div className="w-full lg:w-1/4"> */}{" "}
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img
              className="rounded-3xl mb-6 cursor-pointer"
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
              and other weather-related details
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
