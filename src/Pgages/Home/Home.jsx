import Banner from "../../components/Banner/Banner";
import Contact from "../../components/Contact/Contact";
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


// https://i.ibb.co/tQJwQ7Q/content-writing.png
// https://i.ibb.co/bgjjsRN/data-entry.png
// https://i.ibb.co/98rmBsg/game.png
// https://i.ibb.co/fdr325V/web.png