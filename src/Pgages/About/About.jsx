import aboutImg from "../../assets/about.webp";

const About = () => {
  return ( 
    <div className="flex lg:flex-row flex-col items-center gap-8 mx-auto mt-28">
      <div>  
        <img src={aboutImg} alt="" />    
      </div>
      <div className="flex-1">
        <p className=" text-[#E57D9D] font-caveat text-4xl">I innovate digital solutions.</p>
        <h4 className="lg:text-xl text-base text-justify font-nato">  
          Creating Exceptional Solutions My passion lies in crafting and
          developing extraordinary digital experiences. My expertise thrives in
          the realm of User Experience & User Interface design, where I derive
          immense satisfaction from unraveling intricate design challenges and
          devising streamlined solutions. Dedicated to cultivating optimal user
          interactions, I consistently strive to fashion intuitive interfaces
          that epitomize the pinnacle of user experience.{" "}   
        </h4> 
      </div>
    </div>
  );
};

export default About;
