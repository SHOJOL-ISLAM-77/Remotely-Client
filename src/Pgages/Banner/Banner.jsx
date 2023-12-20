import bannerImg from "../../assets/banner.webp";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png"; 
import instagram from "../../assets/icons/instagram.png"; 
import linkedin from "../../assets/icons/linkedin.png"; 
import pinterest from "../../assets/icons/pinterest.png"; 

const Banner = () => { 
  return (
    <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-6 px-5 mt-8">
      <div className=" mt-20 flex-1">
        <p className="text-4xl  font-caveat text-primary ">Hello, We Are Here For You</p>
        <h3 className="lg:text-4xl md:text-4xl text-3xl text-text-color font-semibold uppercase font-cinzel leading-loose my-5 "> 
          A dedicated professional with a passion{" "} 
        </h3>
        <p className="lg:text-xl text-base text-justify font-nato">
          Our mission is to create an environment where individuals can thrive
          personally and professionally, transcending boundaries and connecting
          with diverse minds across various fields.{" "} 
        </p>
        <button className=" text-lg font-cinzel px-5 py-2 foont-bold bg-primary my-8 text-white rounded ">
          Contact Us
        </button>
        <div className="flex md:flex-wrap items-center gap-5"> 
          <img className="w-12" src={facebook} alt="" />
          <img className="w-12" src={twitter} alt="" />
          <img className="w-12" src={linkedin} alt="" />
          <img className="w-12" src={instagram} alt="" />
          <img className="w-12" src={pinterest} alt="" />
        </div>
      </div>
      <div className=" mt-12 mx-auto">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
