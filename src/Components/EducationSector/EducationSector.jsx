import React from "react";
import "./EducationSector.css"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import NovaCaseBanner from "../../Assets/Img/HomeImage/Nova-Case-Banner.png";

const EducationSector = () => {
  return (
    <>
      <section className="py-10">
        <div className="grid grid-cols-2">
          <div className="bg-[#410EAD] px-36 flex flex-col justify-center">
            <div className="text-white text-xl px-20 py-10 border-4 font-normal">
              <div>
                <p className="text-center pb-3 pl-16">Transforming the</p>
                <p className="text-end text-4xl font-bold pb-3">
                  Education Sector
                </p>
                <p className="text-end pb-3">with decentralized LMS</p>
              </div>
              <div>
                <p className="text-4xl font-bold pb-3">Nova</p>
                <p className="text-xl font-normal pb-3">
                  The app which answers all the authentication and genuinity
                  issues prevalent in today’s education sector through the power
                  of Blockchain.
                </p>
                <a href="" className="flex flex-row items-center nova-readmore underline decoration-1">
                  Read more{" "}
                    <HiOutlineArrowNarrowRight className="text-3xl ml-2" />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-[#9365f5] flex justify-center items-center">
            <img src={NovaCaseBanner} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationSector;
