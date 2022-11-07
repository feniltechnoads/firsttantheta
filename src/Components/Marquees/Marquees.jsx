import React from "react";
import Marquee from "react-fast-marquee";

const Marquees = ({
  images1,
  images2,
  images3,
  images4,
  images5,
  images6,
  images7,
  images8,
  images9,
  images10,
  images11,
}) => {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-5 py-20">
          <Marquee speed="70">
            <div className="mx-11">
              <img src={images1} alt="" />
            </div>
            <div className="mx-11">
              <img src={images2} alt="" />
            </div>
            <div className="mx-11">
              <img src={images3} alt="" />
            </div>
            <div className="mx-11">
              <img src={images4} alt="" />
            </div>
            <div className="mx-11">
              <img src={images5} alt="" />
            </div>
            <div className="mx-11">
              <img src={images6} alt="" />
            </div>
            <div className="mx-11">
              <img src={images7} alt="" />
            </div>
            <div className="mx-11">
              <img src={images8} alt="" />
            </div>
            <div className="mx-11">
              <img src={images9} alt="" />
            </div>
            <div className="mx-11">
              <img src={images10} alt="" />
            </div>
            <div className="mx-11">
              <img src={images11} alt="" />
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Marquees;
