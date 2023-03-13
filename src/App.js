import React from "react";
import Ramen from "../src/assets/ramen.png";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
      <Navbar />
      <div className="md:container px-2 pt-5 md:text-left text-center mt-28">
        {/* <h1 className="text-[#181818] font-bold text-3xl mt-7">Order Ramen</h1> */}
        <div className="md:flex items-center md:justify-between pt-6">
          <img
            src={Ramen}
            alt="ramen-img"
            className="md:w-[36%] w-[52%] md:py-0 py-4 md:mx-0 mx-auto"
          />
          <div className="md:w-1/2">
            <ul className="text-[#181818] pb-4 font-semibold">
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4 border-b-2 border-[#181818] md:ml-2">
                Ramen
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                Soba
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                Sushi
              </li>
              <li className="inline-block cursor-pointer md:mr-8 md:mx-0 mx-4">
                Tempura
              </li>
            </ul>
            <h1 className="text-[#181818] w-full pb-2 text-6xl font-semibold">
              RAMEN
            </h1>
            <p className="text-[#181818] font-extralight text-sm md:w-2/3 md:pl-1 pb-10 leading-6 tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean
              vel elit scelerisque mauris pellentesque pulvinar pellentesque
              habitant. Cras ornare arcu dui vivamus arcu felis bibendum ut
              tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
