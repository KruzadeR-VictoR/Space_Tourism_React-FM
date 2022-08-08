import React, { useEffect, useState } from "react";
import "../Styles/Crew.css";
import Navbar from "../Components/Navbar";
import { FaCircle } from "react-icons/fa";
import { useParams, NavLink } from "react-router-dom";

function Crew({ data }) {
  const { name } = useParams();

  let id = 0;

  const handleControl = () => {
    const arr = document.querySelectorAll(".Dot");
    const Dots = [...arr];
    Dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        dot.style.fill = "white";
        Dots.filter((item) => {
          return item != dot;
        }).forEach((item) => {
          item.style.fill = "rgb(75, 85, 99)";
        });
      });
    });
  };

  useEffect(() => {
    handleControl();
  }, [name]);

  if (name == `Douglas Hurley`) {
    id = 0;
  } else if (name == "Mark Shuttlewort") {
    id = 1;
  } else if (name == "Victor Glover") {
    id = 2;
  } else {
    id = 3;
  }
  return (
    <>
      <div className="Crew flex flex-col justify-between">
        <Navbar />
        <div className="inner-crew container mx-auto flex-1 flex flex-col">
          <h1
            className="heading text-3xl font-Barlow tracking-[2px] ml-[10rem] mt-[5rem] text-white"
            id="heading"
          >
            <span className="mr-5 text-gray-500">02</span>MEET YOUR CREW
          </h1>
          <div className="about-crew flex-1 flex justify-center items-center gap-x-40 mt-10">
            <div className="about basis-1/3 py-4 px-[3rem]">
              <h1 className="role font-Bellefair text-4xl text-gray-400">
                {data[id].role.toUpperCase()}
              </h1>
              <h1 className="name font-Bellefair text-7xl leading-[1.3em] mt-7 text-white">
                {data[id].name.toUpperCase()}
              </h1>
              <p className="description font-Barlow text-xl leading-[1.6em] my-10 text-gray-300">
                {data[id].bio}
              </p>
              <div className="controls flex gap-x-5">
                <NavLink to="/Crew/Douglas Hurley">
                  <FaCircle className="Dot" />
                </NavLink>
                <NavLink to="/Crew/Mark Shuttlewort">
                  <FaCircle
                    className="Dot"
                    // onClick={(e) => handleControl(e)}
                  />
                </NavLink>
                <NavLink to="/Crew/Victor Glover">
                  <FaCircle
                    className="Dot"
                    // onClick={(e) => handleControl(e)}
                  />
                </NavLink>
                <NavLink to="/Crew/Anousheh Ansari">
                  <FaCircle
                    className="Dot"
                    // onClick={(e) => handleControl(e)}
                  />
                </NavLink>
              </div>
            </div>
            <div className="image h-full flex items-end">
              <img src={data[id].images.png} alt="" />
              <hr className="mobile-divider" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crew;
