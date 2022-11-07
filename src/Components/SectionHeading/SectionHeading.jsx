import React from "react";
import Typewriter from "typewriter-effect";

const SectionHeading = ({ Web_03_Image, Ten_Theta_Slogan }) => {
  return (
    <>
      <section className="my-10">
        <div className="container mx-auto px-5">5
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-3xl lg:text-5xl leading-normal mb-4 lg:w-2/3">
                Revolutionizing
                <span className="flex">
                  <span className="text-[#410EAD] text-md">
                    <Typewriter
                      options={{
                        strings: ["Web3.0", "Blockchain", "Metaverse", "NFT"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>{" "}
                  Experience
                </span>
              </h1>
              <p className="text-lg leading-normal mb-8 md:w-2/3">
                We put disruption in top gear by helping you create your{" "}
                web3 ideas to build and scale your dApp with ease.
              </p>
              <a href="">
                <button
                  className="bg-[#410EAD] tracking-widest text-white active:bg-[#410EAD] font-bold uppercase text-md px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                >
                  Consult our Tech Advisors
                </button>
              </a>
            </div>
            <div className="m-auto block">
              <img src={Ten_Theta_Slogan} alt="tentheta" className="w-auto" />
              <img src={Web_03_Image} alt="images" className="w-auto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHeading;
