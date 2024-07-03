import { useState } from "react";

function Experience() {
  const [activeId, setActiveId] = useState(0);

  function filterExperience(id) {
    setActiveId(id);
  }

  return (
    <section className="m-10">
      <h2 className="text-5xl font-bold text-secondary text-center xl:text-left mb-5">
        Experience<span className="text-primary">.</span>
      </h2>
      <div className="experience-container md:flex md:justify-between md:items-center md:space-x-32">
        {/* exp-head-container, a class name for all the company names */}
        <div className="exp-head-container border-t-4 border-secondary flex justify-between list-none text-lg space-y-3 mt-7 mb-4 font-medium text-secondary md:flex-col md:justify-center md:h-[280px] md:w-1/6 md:p-6 md:space-y-7 md:text-2xl md:border-l-4 md:border-t-0">
          <li
            className="mt-3 cursor-pointer hover:text-primary w-fit transition-all duration-300"
            onClick={() => filterExperience(0)}
          >
            Apple
          </li>
          <li
            className="cursor-pointer  hover:text-primary w-fit transition-all duration-300"
            onClick={() => filterExperience(1)}
          >
            Microsoft
          </li>
          <li
            className="cursor-pointer  hover:text-primary w-fit transition-all duration-300"
            onClick={() => filterExperience(2)}
          >
            Spotify
          </li>
          <li
            className="cursor-pointer  hover:text-primary w-fit transition-all duration-300"
            onClick={() => filterExperience(3)}
          >
            Stripe
          </li>
        </div>
        {/* exp-body-container, a class name for all the achivements at the company */}
        <div className="exp-body-container list-none text-center font-normal text-secondary md:w-5/6 md:p-1 md:text-left">
          <div
            className={`exp text-[19px] leading-7 font-semibold  space-y-6 p-5 transition-all duration-500 ${
              activeId === 0 ? "opacity-100" : "opacity-0 h-0 fixed"
            }`}
          >
            <div className="space-y-1">
              <h3 className="font-medium text-2xl">
                Engineer @ <span className="text-primary">Apple</span>
              </h3>
              <p className="text-sm font-medium text-gray-700">
                May 2018 - Present
              </p>
            </div>
            <div className="space-y-3 font-normal text-base text-left md:text-[19px]">
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Developed and shipped highly interactive web applications for
                Apple Music using Ember.js
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Built and shipped the Apple Music Extension within Facebook
                Messenger leveraging third-party and internal APIs
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Contributed extensively to MusicKit.js, a JavaScript framework
                that allows developers to add an Apple Music player to their web
                apps
              </li>
            </div>
          </div>

          <div
            className={`exp text-[19px] leading-7 font-semibold  space-y-6 p-5 transition-all duration-500 ${
              activeId === 1 ? "opacity-100" : "opacity-0 h-0 fixed"
            }`}
          >
            <div className="space-y-1">
              <h3 className="font-medium text-2xl">
                Frontend Developer @{" "}
                <span className="text-primary">Microsoft</span>
              </h3>
              <p className="text-sm font-medium text-gray-700">
                January - April 2018
              </p>
            </div>
            <div className="space-y-3 font-normal text-base text-left md:text-[19px]">
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Worked with a team to build a marketing website and e-commerce
                platform for blistabloc, an ambitious startup.
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Helped solidify a brand direction for blistabloc that spans both
                packaging and web.
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Interfaced with clients on a weekly basis, providing
                technological expertise.
              </li>
            </div>
          </div>

          <div
            className={`exp text-[19px] leading-7 font-semibold  space-y-6 p-5 transition-all duration-500 ${
              activeId === 2 ? "opacity-100" : "opacity-0 h-0 fixed"
            }`}
          >
            <div className="space-y-1">
              <h3 className="font-medium text-2xl">
                UI Engineer @ <span className="text-primary">Spotify</span>
              </h3>
              <p className="text-sm font-medium text-gray-700">
                July - December 2017
              </p>
            </div>
            <div className="space-y-3 font-normal text-base text-left md:text-[19px]">
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Work with a variety of different languages, platforms,
                frameworks, and content management systems.
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </li>
            </div>
          </div>

          <div
            className={`exp text-[19px] leading-7 font-semibold  space-y-6 p-5 transition-all duration-500 ${
              activeId === 3 ? "opacity-100" : "opacity-0 h-0 fixed"
            }`}
          >
            <div className="space-y-1">
              <h3 className="font-medium text-2xl">
                Backend Developer @ <span className="text-primary">Stripe</span>
              </h3>
              <p className="text-sm font-medium text-gray-700">
                January - June 2017
              </p>
            </div>
            <div className="space-y-3 font-normal text-base text-left md:text-[19px]">
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Developed and maintained code for in-house and client websites
                primarily using HTML, CSS, Sass, JavaScript, and jQuery
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Manually tested sites in various browsers and mobile devices to
                ensure cross-browser compatibility and responsiveness
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Clients included JetBlue, Lovesac, U.S. Cellular, U.S.
                Department of Defense, and more
              </li>
            </div>
          </div>

          {/* <div
            className={`exp text-[19px] leading-8 font-semibold  space-y-6 p-5 transition-all duration-500 min-h-[280px] ${
              activeId === 1 ? "opacity-100" : "opacity-0 h-0 fixed"
            }`}
          >
            <div className="space-y-1">
              <h3 className="font-medium text-2xl">
                Frontend Developer @{" "}
                <span className="text-primary">Microsoft</span>
              </h3>
              <p className="text-sm font-medium text-gray-700">
                January - April 2018
              </p>
            </div>
            <div className="space-y-4  font-normal">
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Worked with a team to build a marketing website and e-commerce
                platform for blistabloc, an ambitious startup.
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Helped solidify a brand direction for blistabloc that spans both
                packaging and web.
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Interfaced with clients on a weekly basis, providing
                technological expertise.
              </li>
            </div>
          </div>

          <div
            className={`exp text-[19px] leading-7 font-semibold space-y-6 p-5 transition-all duration-500 min-h-[280px] ${
              activeId === 2 ? "opacity-100" : "opacity-0 h-0 fixed"
            }`}
          >
            <div className="space-y-1">
              <h3 className="font-medium text-2xl">
                UI Engineer @ <span className="text-primary">Spotify</span>
              </h3>
              <p className="text-sm font-medium text-gray-700">
                July - December 2017
              </p>
            </div>
            <div className="space-y-3  font-normal">
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Write modern, performant, maintainable code for a diverse array
                of client and internal projects
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Work with a variety of different languages, platforms,
                frameworks, and content management systems.
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Communicate with multi-disciplinary teams of engineers,
                designers, producers, and clients on a daily basis
              </li>
            </div>
          </div>

          <div
            className={`exp text-[18.2px] leading-[1.6rem] font-semibold space-y-6 p-5 transition-all duration-500 min-h-[280px] ${
              activeId === 3 ? "opacity-100" : "opacity-0 h-0 fixed"
            }`}
          >
            <div className="space-y-1">
              <h3 className="font-medium text-2xl">
                Frontend Developer @{" "}
                <span className="text-primary">Stripe</span>
              </h3>
              <p className="text-sm font-medium text-gray-700">
                July - December 2017
              </p>
            </div>
            <div className="space-y-4  font-normal">
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Developed and maintained code for in-house and client websites
                primarily using HTML, CSS, Sass, JavaScript, and jQuery
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Manually tested sites in various browsers and mobile devices to
                ensure cross-browser compatibility and responsiveness
              </li>
              <li className="flex">
                <svg
                  className="mr-3"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#6E06F2"
                    stroke-width="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Clients included JetBlue, Lovesac, U.S. Cellular, U.S.
                Department of Defense, and more
              </li>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Experience;
