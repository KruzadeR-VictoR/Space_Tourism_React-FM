import React, { useEffect } from "react";
import "../Styles/Technology.css";
import Navbar from "../Components/Navbar";
import img from "../assets/technology/image-space-capsule-portrait.jpg";
import { Link, useParams } from "react-router-dom";

function Technology({ data }) {
  const { name } = useParams();

  const handleControl = () => {
    const arr = document.querySelectorAll(".nav-control");
    const Dots = [...arr];

    Dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        dot.style.backgroundColor = "white";
        dot.style.color = "black";
        Dots.filter((item) => {
          return item != dot;
        }).forEach((item) => {
          item.style.backgroundColor = "transparent";
          item.style.color = "white";
        });
      });
    });
  };

  useEffect(() => {
    handleControl();
  }, [name]);

  let id = 0;

  if (name == `Launch vehicle`) {
    id = 0;
  } else if (name == "Spaceport") {
    id = 1;
  } else {
    id = 2;
  }
  return (
    <>
      <div className="Technology flex flex-col">
        <Navbar />
        <div className="inner-tech flex-1 flex flex-col gap-y-10">
          <h1 className="text-3xl font-Barlow tracking-[2px] ml-[10rem] mt-[5rem] text-white">
            <span className="mr-5 text-gray-500">03</span> SPACE LAUNCH 101
          </h1>
          <div className="about-tech container mx-auto flex-1 flex items-center gap-x-10 px-[5rem]">
            <div className="left basis-1/2 flex gap-x-10">
              <div className="control">
                <Link
                  to="/Technology/Launch vehicle"
                  className="nav-control font-Bellefair text-4xl active"
                >
                  1
                </Link>
                <Link
                  to="/Technology/Spaceport"
                  className="nav-control font-Bellefair text-4xl"
                >
                  2
                </Link>
                <Link
                  to="/Technology/Space capsule"
                  className="nav-control font-Bellefair text-4xl"
                >
                  3
                </Link>
              </div>
              <div className="about">
                <h1 className="font-Barlow text-xl text-gray-300 tracking-[1px]">
                  THE TERMINOLOGY...
                </h1>
                <h1 className="font-Bellefair text-6xl text-white my-5 whitespace-nowrap">
                  {data[id].name.toUpperCase()}
                </h1>
                <p className="font-BarlowReg text-xl text-gray-300">
                  {data[id].description}
                </p>
              </div>
            </div>
            <div className="image basis-1/2 h-full flex justify-center items-center">
              <img src={data[id].images.portrait} alt="tch_image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
