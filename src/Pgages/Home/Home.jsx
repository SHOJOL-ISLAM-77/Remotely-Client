import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Team from "../../components/Team/Team";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <Team />
      <Contact/>
      {/* <Skills></Skills> */}
      {/* <Pricing></Pricing>  
           <Team></Team>  
           <Faq></Faq>
           <Testimonial></Testimonial> */}
      {/* <Contact></Contact>    */}
    </div>
  );
};

export default Home;
