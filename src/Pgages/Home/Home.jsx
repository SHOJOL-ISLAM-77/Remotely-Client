import About from "../About/About";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";
import Team from "../Team/Team";

const Home = () => {
    return (
        <div className=" min-h-screen">
           <Banner></Banner>
           <About></About>
           <Skills></Skills> 
           <Team></Team>      
        </div>
    );
};

export default Home;