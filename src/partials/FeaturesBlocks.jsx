import React from "react";

function FeaturesBlocks() {
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-48 mt-12 md:mt-48 lg:mt-48 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-0 md:pb-2">
            <h2 className="h2 mb-4">
              How Simple{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-gray-900">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              {/* className="w-16 h-16 p-1 -mt-1 mb-2" */}
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-8"
                fill="#cd9b00"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#cd9b00"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M4,21a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3ZM12,7.5a2,2,0,1,1-2,2A2,2,0,0,1,12,7.5ZM8.211,16.215a4,4,0,0,1,7.578,0A.993.993,0,0,1,14.83,17.5H9.18A1,1,0,0,1,8.211,16.215Z"></path>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Initial Contact
              </h4>
              <p className="text-gray-600 text-center">
              Where dreams whisper in our first touch, your journey with Jasar Al Heera begins – an embrace of hearts entwined.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-12 h-16 p-1 -mt-1 mb-2"
                fill="#cd9b00"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#cd9b00"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>contract</title>{" "}
                  <path d="M0 26.016v-20q0-2.496 1.76-4.256t4.256-1.76h20q2.464 0 4.224 1.76t1.76 4.256v20q0 2.496-1.76 4.224t-4.224 1.76h-20q-2.496 0-4.256-1.76t-1.76-4.224zM4 26.016q0 0.832 0.576 1.408t1.44 0.576h19.232l-3.84-3.84-1.536 1.504q-0.48 0.448-1.152 0.544t-1.28-0.128-1.024-0.736-0.416-1.088v-5.664q0-0.8 0.896-1.696t1.696-0.896h5.664q0.608 0 1.12 0.48t0.704 1.056 0.128 1.312-0.544 1.152l-1.408 1.376 3.744 3.744v-19.104q0-0.832-0.576-1.408t-1.408-0.608h-12v4q0 2.496-1.76 4.256t-4.256 1.76h-4v12zM4 8q0 0.832 0.576 1.44t1.44 0.576h1.984q0.832 0 1.408-0.576t0.608-1.44v-1.984q0-0.832-0.608-1.408t-1.408-0.608h-1.984q-0.832 0-1.44 0.608t-0.576 1.408v1.984z"></path>{" "}
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Contracting
              </h4>
              <p className="text-gray-600 text-center">
              In celestial ink, promises are woven, sealing a bond eternal, a vow to cradle your vehicle in our tender care.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <svg
                className="w-16 h-16 p-1 -mt-1 mb-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.56443 8.73049L10.0789 10.5926C10.5639 12.3481 10.8064 13.2259 11.5194 13.6252C12.2323 14.0244 13.1374 13.7892 14.9474 13.3188L16.8673 12.8199C18.6774 12.3495 19.5824 12.1143 19.9941 11.4227C20.4057 10.7312 20.1632 9.85344 19.6782 8.09788L19.1638 6.2358C18.6788 4.48023 18.4363 3.60244 17.7233 3.20319C17.0103 2.80394 16.1052 3.03915 14.2952 3.50955L12.3753 4.00849C10.5652 4.47889 9.66021 4.71409 9.24856 5.40562C8.83692 6.09714 9.07943 6.97493 9.56443 8.73049Z"
                    fill="#cd9b00"
                  ></path>{" "}
                  <path
                    d="M2.27749 5.24694C2.38823 4.84781 2.80157 4.61402 3.2007 4.72476L4.9044 5.19744C5.82129 5.45183 6.5469 6.15866 6.80003 7.07489L8.95106 14.8609L9.10935 15.4075C9.74249 15.6438 10.2863 16.0866 10.6314 16.6747L10.9414 16.579L19.8115 14.2739C20.2124 14.1697 20.6219 14.4102 20.7261 14.8111C20.8303 15.212 20.5897 15.6214 20.1888 15.7256L11.3515 18.0223L11.0228 18.1238C11.0161 19.3947 10.1392 20.5555 8.81236 20.9003C7.22189 21.3136 5.58709 20.3982 5.16092 18.8556C4.73476 17.313 5.67861 15.7274 7.26908 15.3141C7.3479 15.2936 7.42682 15.2764 7.5057 15.2623L5.35419 7.47433C5.24592 7.08242 4.92897 6.76092 4.50338 6.64284L2.79968 6.17016C2.40054 6.05942 2.16675 5.64608 2.27749 5.24694Z"
                    fill="#cd9b00"
                  ></path>{" "}
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                Delivery
              </h4>
              <p className="text-gray-600 text-center">
              Your chariot, adorned with artistry, takes a triumphant bow, ready to dance upon the open road.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
