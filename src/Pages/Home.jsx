import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Home.css";

function Home() {
  return (
    <>
      <div className="Home flex flex-col">
        <Navbar />
        <main className="text-white flex">
          <div className="intro basis-1/2 flex flex-col justify-center font-Barlow">
            <h3 className="text-3xl text-gray-300 tracking-[2px]">
              SO, YOU WANT TO TRAVEL TO
            </h3>
            <div>
              <h1 className="text-[10rem] font-Bellefair">SPACE</h1>
              <p className="text-xl text-gray-300 leading-[1.5em]">
                Let's face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we'll give you a truly out
                of this world experience!
              </p>
            </div>
          </div>
          <div className="explore basis-1/2 flex justify-center items-center">
            <div className="button font-Bellefair text-2xl flex justify-center items-center">
              EXPLORE
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
