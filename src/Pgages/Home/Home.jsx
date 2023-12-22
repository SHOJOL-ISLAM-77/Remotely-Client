import About from "../About/About";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import Skills from "../Skills/Skills";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div className=" min-h-screen">
           <Banner></Banner>
           <About></About>
           <Skills></Skills>
           <Pricing></Pricing>  
           <Team></Team>  
           <Testimonial></Testimonial>     
        </div>
    );
};

export default Home;