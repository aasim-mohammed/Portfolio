import React from "react";
import logo from "../assets/pngegg.png";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-16" src={logo} alt="logo" />
      </div>
      {/* <div className="m-8 mx-16 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          onClick={() => (
            (window.location.href =
              "https://www.linkedin.com/in/mohammed-aasim-70176223b/"),
            "_blank"
          )}
          className="cursor-pointer"
        />
        <FaGithub
          onClick={() => (
            (window.location.href =
              "https://www.linkedin.com/in/mohammed-aasim-70176223b/"),
            "_blank"
          )}
          className="cursor-pointer"
        />
        <FaInstagram
          onClick={() => (
            (window.location.href = "https://www.instagram.com/aasim_faisal/"),
            "_blank"
          )}
          className="cursor-pointer"
        />
      </div> */}
      <div className="m-8 mx-16 flex items-center justify-center gap-6 text-4xl">
        <FaLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/mohammed-aasim-70176223b/",
              "_blank"
            )
          }
          className="cursor-pointer text-[#0A66C2] transition duration-300 hover:drop-shadow-[0_0_8px_#0A66C2]"
        />

        <FaGithub
          onClick={() =>
            window.open("https://github.com/aasim-mohammed", "_blank")
          }
          className="cursor-pointer text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_white]"
        />

        <FaInstagram
          onClick={() =>
            window.open("https://www.instagram.com/aasim_faisal/", "_blank")
          }
          className="cursor-pointer text-[#E4405F] transition duration-300 hover:drop-shadow-[0_0_8px_#E4405F]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
