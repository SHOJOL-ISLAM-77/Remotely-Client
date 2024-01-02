import SectionTitle from "../SectionTitle/SectionTitle";
import WhatWeDoCarousel from "../WhatWeDoCarousel/WhatWeDoCarousel";

const WhatWeDo = () => {
  return (
    <div id="whatWeDo">
      <div className="container mx-auto">
        <SectionTitle
          heading="What We Do"
          subHeading="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum praesentium libero est quae suscipit debitis ea et ullam quia soluta!"
        />
      </div>
      <div className="mx-3">
        <WhatWeDoCarousel/>
      </div>
    </div>
  );
};

export default WhatWeDo;
