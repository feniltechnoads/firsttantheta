import React from "react";
import SectionHeading from "../../Components/SectionHeading/SectionHeading";
// import Web_03_Image from "../../Utils/Allimgs/index"
import Web_03_Image from "../../Assets/Img/HomeImage/Web_03_Image.png";
import Ten_Theta_Slogan from "../../Assets/Img/HomeImage/Ten_Theta_Slogan.png";
import Marquees from "../../Components/Marquees/Marquees";
import MarqueeImage1 from "../../Assets/Img/HomeImage/MarqueeImage1.png";
import MarqueeImage2 from "../../Assets/Img/HomeImage/MarqueeImage2.png";
import MarqueeImage3 from "../../Assets/Img/HomeImage/MarqueeImage3.png";
import MarqueeImage4 from "../../Assets/Img/HomeImage/MarqueeImage4.png";
import MarqueeImage5 from "../../Assets/Img/HomeImage/MarqueeImage5.png";
import MarqueeImage6 from "../../Assets/Img/HomeImage/MarqueeImage6.png";
import MarqueeImage7 from "../../Assets/Img/HomeImage/MarqueeImage7.png";
import MarqueeImage8 from "../../Assets/Img/HomeImage/MarqueeImage8.png";
import MarqueeImage9 from "../../Assets/Img/HomeImage/MarqueeImage9.png";
import MarqueeImage10 from "../../Assets/Img/HomeImage/MarqueeImage10.png";
import MarqueeImage11 from "../../Assets/Img/HomeImage/MarqueeImage11.png";
import Innovation from "../../Components/Innovation/Innovation";
import Lead from "../../Components/Lead/Lead";
import DigitalProduct from "../../Components/DigitalProduct/DigitalProduct";
import SourcesMap from "../../Components/SourcesMap/SourcesMap";
import Alchemy from "../../Components/Alchemy/Alchemy";
import EducationSector from "../../Components/EducationSector/EducationSector";
import HomeServicesTechnology from "../../Components/HomeServicesTechnology/HomeServicesTechnology";

const Home = () => {
  return (
    <>
      <SectionHeading
        Web_03_Image={Web_03_Image}
        Ten_Theta_Slogan={Ten_Theta_Slogan}
      />
      <Marquees
        images1={MarqueeImage1}
        images2={MarqueeImage2}
        images3={MarqueeImage3}
        images4={MarqueeImage4}
        images5={MarqueeImage5}
        images6={MarqueeImage6}
        images7={MarqueeImage7}
        images8={MarqueeImage8}
        images9={MarqueeImage9}
        images10={MarqueeImage10}
        images11={MarqueeImage11}
      />
      <Innovation />
      <Lead />
      <DigitalProduct />
      {/* <SourcesMap /> */}
      <Alchemy />
      <EducationSector />
      <HomeServicesTechnology />
    </>
  );
};

export default Home;
