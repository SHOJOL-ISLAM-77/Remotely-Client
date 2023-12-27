import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Faq from "../FAQ/FAQ";
import Pricing from "../Pricing/Pricing";
import Skills from "../Skills/Skills";
import Team from "../Team/Team";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="min-h-screen">
           <Banner></Banner>
           <About></About>
           <Skills></Skills>
           <Pricing></Pricing>  
           <Team></Team>  
           <Faq></Faq>
           <Testimonial></Testimonial>
           {/* <Contact></Contact>    */}

        </div>
    );
};

export default Home;