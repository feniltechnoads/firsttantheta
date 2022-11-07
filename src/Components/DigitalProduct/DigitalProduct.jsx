import React from "react";
import { DigitalProductData } from "../../Data/DigitalProductData/DigitalProductData";

const DigitalProduct = () => {
  return (
    <>
      <section className="py-8">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl lg:text-4xl pb-4 leading-normal lg:w-7/12">
              The relentless pursuit of being the best in digital product{" "}
              <span className="text-[#410EAD]">development</span>
            </h3>
            <p className="text-base font-normal leading-7 lg:w-6/12 pb-8">
              Our award and recognitions validate that when businesses think
              about expanding into mobile segment, we are the top mobile app
              development company in US that they think of.
            </p>
            <div className="grid lg:grid-cols-3 gap-14 px-5 lg:px-0">
              {DigitalProductData.map((element) => {
                return (
                  <div className="flex flex-col items-center border-2 border-[#D0D0DD] px-8 xl:px-24 pb-4" key={element.id}>
                    <div className="pb-4 pt-12">
                      <img src={element.img} alt={element.alt} />
                    </div>
                    <h6 className="text-base font-semibold pb-2">
                      {element.heading}
                    </h6>
                    <p className="text-sm font-normal">
                      {element.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalProduct;
