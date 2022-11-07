import React from "react";
import "./HomeServicesTechnology.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import HomeServicesTechnologyData from "../../Data/HomeServicesTechnologyData/HomeServicesTechnologyData";

const HomeServicesTechnology = () => {
  return (
    <>
      <section className="py-10">
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center pb-12">
            <div className="lg:w-1/2">
              <h3 className="text-4xl pb-2">
                What we <span className="text-[#410EAD]">can do for you?</span>
              </h3>
              <p className="text-base">
                Our strength lies in the comprehensive suite of services we
                offer to our clients. From full-stack development to just
                consultancy- you demand, we deliver.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-wrap place-content-around items-center bg-[#FAF7FF] rounded-3xl shadow-xl py-16">
            <div>
              <h5 className="text-3xl pb-14 lg:pb-0">Our Services</h5>
            </div>
            <div className="">
              <div className="grid lg:grid-cols-2 gap-6 text-center pb-16">
                {HomeServicesTechnologyData.map((element) => {
                  return (
                    <a
                      href={element.href}
                      className="bg-white rounded-full py-3 text-lg"
                      key={element.id}
                    >
                      <button className="text-[#410EAD] px-4">
                        {element.buttonName}
                      </button>
                    </a>
                  );
                })}
              </div>
              <div className="flex justify-end">
                <button className="text-[#410EAD] text-xl flex">
                  View all
                  <HiOutlineArrowNarrowRight className="text-3xl ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServicesTechnology;
