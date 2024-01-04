import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
import Faq from "../../components/FAQ/Faq";
import Team from "../../components/Team/Team";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Banner></Banner>
      <br />
      <br />
      <br />
      <WhatWeDo/>
      <br />
      <br />
      <br />
      <Team />
      <br />
      <br />
      <br />
      <Contact/>
      <br />
      <br />
      <br />
      <About/>
      <br />
      <br />
      <br />
      <Faq></Faq>
      {/* <Skills></Skills> */}
      {/* <Pricing></Pricing>  
           <Team></Team>  
          
           <Testimonial></Testimonial> */}
      {/* <Contact></Contact>    */}
    </div>
  );
};

export default Home;


// https://i.ibb.co/tQJwQ7Q/content-writing.png
// https://i.ibb.co/bgjjsRN/data-entry.png
// https://i.ibb.co/98rmBsg/game.png
// https://i.ibb.co/fdr325V/web.png