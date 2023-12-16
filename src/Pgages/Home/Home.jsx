import About from "../About/About";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div className=" min-h-screen">
           <Banner></Banner>
           <About></About>
           <Skills></Skills> 
        </div>
    );
};

export default Home;