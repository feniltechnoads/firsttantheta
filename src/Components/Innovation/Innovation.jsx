import React from "react";
import "./Innovation.css";
import { RiCloseFill } from "react-icons/ri";
// import {IoClose} from "react-icons/io5"

const Innovation = () => {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-5 pb-10">
          <div className="text-center">
            <h5 className="text-[#410EAD] text-2xl md:text-4xl formula-image">
              <span className="atom-image py-5 pl-6">
                Innovation = <span className="text-black">One team x Same</span>{" "}
                Vision<sup>2</sup>
              </span>
            </h5>
          </div>
          <div className="flex justify-center text-center">
            <h1 className="w-3/4 text-sm md:text-lg">
              tan θ dream, architect, design and develop. But more than that, we
              are a team of passionate people driven by one relentless pursuit-
              to craft innovative solutions and deliver unparalleled results.
            </h1>
          </div>
          <div className="flex justify-around items-center text-center my-5">
            <div>
              <h6 className="text-[#410EAD] text-3xl">$24m</h6>
              <p className="font-medium text-gray-500">Investment Raised</p>
            </div>
            <div>
              <h6 className="text-[#410EAD] text-3xl">=</h6>
            </div>
            <div>
              <h6 className="text-3xl">55+</h6>
              <p className="font-medium text-gray-500">
                Creative nerds under one roof
              </p>
            </div>
            <div>
              <h6 className="text-3xl flex justify-center font-extrabold">
                <RiCloseFill />
              </h6>
            </div>
            <div>
              <h6 className="text-[#410EAD] text-3xl">
                (135+)<sup>2</sup>
              </h6>
              <p className="font-medium text-gray-500">Products Delivered</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Innovation;
