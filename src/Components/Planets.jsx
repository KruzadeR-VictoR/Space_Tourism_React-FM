import React from "react";
import { NavLink } from "react-router-dom";
import planet from "../assets/destination/image-moon.png";

function Planets() {
  return (
    <>
      <div className="d-content container text-white flex-1 flex flex-col mx-auto">
        <h1 className="text-3xl font-Barlow tracking-[2px] ml-[10rem] mt-[5rem]">
          <span className="mr-5 text-gray-500">01</span> PICK YOUR DESTINATION
        </h1>
        <div className="inner-content h-full flex flex-col justify-center mx-auto ">
          <div className="inner-menu flex justify-center items-center gap-x-[5rem]">
            <div className="basis-1/2">
              <img src={planet} className="planet mx-auto" alt="MOON" />
            </div>
            <div className="right-side-menu basis-1/4 p-2">
              <div className="menu-list font-Barlow tracking-widest text-gray-200 flex gap-x-[2rem]">
                <NavLink to="/Destination/MOON">MOON</NavLink>
                <NavLink to="/Destination/MARS">MARS</NavLink>
                <NavLink to="/Destination/EUROPA">EUROPA</NavLink>
                <NavLink to="/Destination/TITAN">TITAN</NavLink>
              </div>
              <h1 className="planet-name text-[8rem] font-Bellefair mt-5">
                MOON
              </h1>
              <div className="planet-description text-gray-200 text-lg leading-[2rem]">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div>
              <hr className="my-10 h-[.5px] bg-gray-700 border-0" />
              <div className="flex gap-x-[5rem] mt-5">
                <div className="avg-distance">
                  <h2 className="text-[.8rem] font-Barlow tracking-[1px] text-gray-400">
                    AVG. DISTANCE
                  </h2>
                  <h2 className="text-3xl font-Bellefair mt-2">384,400KM</h2>
                </div>
                <div className="est-time">
                  <h2 className="text-[.8rem] font-Barlow tracking-[1px] text-gray-400">
                    EST. TRAVEL TIME
                  </h2>
                  <h2 className="text-3xl font-Bellefair mt-2">3 DAYS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Planets;
