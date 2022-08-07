import React from "react";
import Navbar from "../Components/Navbar";
import "../Styles/Destination.css";
import { NavLink, useParams } from "react-router-dom";

function Destination({ data }) {
  const images = {
    image: "../assets/destination/image-moon.png",
  };
  console.log(images.image);

  const { name } = useParams();
  console.log(data[0].name.toUpperCase());
  let id = "";
  if (name == `MOON`) {
    id = 0;
  } else if (name == "MARS") {
    id = 1;
  } else if (name == "EUROPA") {
    id = 2;
  } else {
    id = 3;
  }
  return (
    <>
      <div className="Destination flex flex-col">
        <Navbar />
        <div className="d-content container text-white flex-1 flex flex-col mx-auto">
          <h1 className="heading text-3xl font-Barlow tracking-[2px] ml-[10rem] mt-[5rem]">
            <span className="mr-5 text-gray-500">01</span> PICK YOUR DESTINATION
          </h1>
          <div className="inner-content h-full flex flex-col justify-center mx-auto">
            <div className="inner-menu flex justify-center items-center gap-x-[5rem]">
              <div className="basis-1/2 left">
                <img
                  src={data[id].images.png}
                  className="planet mx-auto"
                  alt="MOON"
                />
              </div>
              <div className="right-side-menu basis-1/4 p-10">
                <div className="menu-list font-Barlow tracking-widest text-gray-200 flex gap-x-[2rem]">
                  <NavLink to="/Destination/MOON">MOON</NavLink>
                  <NavLink to="/Destination/MARS">MARS</NavLink>
                  <NavLink to="/Destination/EUROPA">EUROPA</NavLink>
                  <NavLink to="/Destination/TITAN">TITAN</NavLink>
                </div>
                <h1 className="planet-name text-[8rem] font-Bellefair mt-5">
                  {data[id].name.toUpperCase()}
                </h1>
                <div className="planet-description text-gray-200 text-lg leading-[2rem]">
                  {data[id].description}
                </div>
                <hr className="my-10 h-[.5px] bg-gray-700 border-0" />
                <div className="planet-stats flex gap-x-[5rem] mt-5">
                  <div className="avg-distance">
                    <h2 className="key text-[.8rem] font-Barlow tracking-[1px] text-gray-400">
                      AVG. DISTANCE
                    </h2>
                    <h2 className="value text-3xl font-Bellefair mt-2">
                      {data[id].distance}
                    </h2>
                  </div>
                  <div className="est-time">
                    <h2 className="key text-[.8rem] font-Barlow tracking-[1px] text-gray-400">
                      EST. TRAVEL TIME
                    </h2>
                    <h2 className="value text-3xl font-Bellefair mt-2">
                      {data[id].travel}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
