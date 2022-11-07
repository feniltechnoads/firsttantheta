import React from "react";
import "../Lead/Lead.css";
import CosSinFormula from "../../Assets/Img/HomeImage/CosSinFormula.png";
import { LeadData } from "../../Data/LeadData/LeadData";

const Lead = () => {
  return (
    <>
      <section className="py-10">
        <div className="main flex items-center py-36">
          <div className="container mx-auto px-5 text-center flex flex-col items-center">
            <h3 className="text-3xl lg:text-4xl pb-4 leading-1 lg:w-6/12">
              We lead. The industry follows as we shape your{" "}
              <span className="text-[#410EAD]">vision to reality</span>
            </h3>
            <p className="text-base font-normal leading-7 lg:w-5/12 pb-5">
              Work with hand-picked tech talent having experience of working
              with companies, from around the world and time-zones.
            </p>
            <div className="pb-5">
              <img src={CosSinFormula} alt="cos sin formula" />
            </div>
            <div className="grid lg:grid-cols-3 gap-5">
              {LeadData.map((element) => {
                return (
                  <div key={element.id}>
                    <img src={element.img} alt={element.alt} />
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

export default Lead;
