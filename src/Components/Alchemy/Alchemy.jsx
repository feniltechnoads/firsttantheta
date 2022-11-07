import React from "react";
import AlchemyImage from "../../Assets/Img/HomeImage/AlchemyImage.png";

const Alchemy = () => {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 px-5">
            <div>
              <h4 className="text-4xl lg:w-2/4 leading-snug pb-2">
                Get started with{" "}
                <span className="text-[#410EAD]">the Alchemy SDK</span>
              </h4>
              <p className="text-base lg:w-4/6 pb-3">
                Our award and recognitions validate that when businesses think
                about expanding into mobile segment, we are the top mobile app
                development company in US that they think of.
              </p>
              <div className="grid grid-cols-3 gap-3 lg:w-2/3">
                <button className="bg-[#410EAD] hover:bg-white hover:text-[#410EAD] border border-[#410EAD] transition ease-in-out duration-1000 text-white py-3 text-sm rounded-full">
                  NFT's
                </button>
                <button className="hover:bg-[#410EAD] bg-white text-[#410EAD] border border-[#410EAD] transition ease-in-out duration-1000 hover:text-white py-3 text-sm rounded-full">
                  DeFi Protocols
                </button>
                <button className="hover:bg-[#410EAD] bg-white text-[#410EAD] border border-[#410EAD] transition ease-in-out duration-1000 hover:text-white py-3 text-sm rounded-full">
                  Wallets
                </button>
                <button className="hover:bg-[#410EAD] bg-white text-[#410EAD] border border-[#410EAD] transition ease-in-out duration-1000 hover:text-white py-3 text-sm rounded-full">
                  Data analytics
                </button>
                <button className="hover:bg-[#410EAD] bg-white text-[#410EAD] border border-[#410EAD] transition ease-in-out duration-1000 hover:text-white py-3 text-sm rounded-full">
                  DAOs
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-black text-[#898989] p-4 w-fit rounded-xl text-xs absolute top-56 left-[-104px] z-50">
                <p>
                  1{" "}
                  <span className="text-[#00FF29]">
                    //Show all NFTs owned by user
                  </span>
                </p>
                <p>2 </p>
                <p>
                  3 <span className="text-[#FF55EE]">getNftsForowner</span>
                  <span
                    className="text-[#FFFFFF]"
                  >
                    (‘0xshah.eth’)
                  </span>
                </p>
                <p>4 </p>
              </div>
              <div className="relative">
                <img src={AlchemyImage} alt="" className="relative" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Alchemy;
