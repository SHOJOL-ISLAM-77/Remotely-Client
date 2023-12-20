import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "lottie-react";
import web from "../../../public/skillsData/web.json"
import app from "../../../public/skillsData/app.json"
import uidesign from "../../../public/skillsData/ui-ux.json"
import graphic from "../../../public/skillsData/graphic.json"
import branding from "../../../public/skillsData/branding.json"
// import graphic from "../../../public/skillsData/"

const SkillSlider = () => {

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 0.3,
    margin: 30, 
    responsive: [
      {
        breakpoint: 600,  
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 868,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
     
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
  <Slider className="mx-auto" {...settings}> 
 <Box className="mx-auto "> 
   <Card className="md:h-[410px] h-[420px] text-justify"> 
      <CardActionArea>  
      <Lottie className="w-full h-[220px]" animationData={web} /> 
        <CardContent> 
          <h3 className=" text-gray-900 font-semibold font-nato md:text-2xl text-xl">
          Web Design & Development   
          </h3> 
          <p className="text-base font-nato">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p> 
        </CardContent>
      </CardActionArea>
      </Card> 
   </Box>
   <Box>
   <Card className="md:h-[410px] h-[420px]">
      <CardActionArea>
      <Lottie className="w-full h-[220px]" animationData={app} /> 
      <CardContent> 
          <h3 className=" text-gray-900 font-semibold font-nato md:text-2xl text-xl">
          Mobile App Development
          </h3> 
          <p className="text-base font-nato">
          Creating groundbreaking and user-centric mobile applications to meet the demands of the modern digital landscape.
          </p> 
        </CardContent>
      </CardActionArea>
      </Card>
   </Box>
   <Box >
   <Card className="md:h-[410px] h-[420px]">   
      <CardActionArea> 
      <Lottie className="w-full h-[220px]" animationData={graphic} /> 
      <CardContent> 
          <h3 className=" text-gray-900 font-semibold font-nato md:text-2xl text-xl">
          Mobile App Development
          </h3> 
          <p className="text-base font-nato">
          Creating groundbreaking and user-centric mobile applications to meet the demands of the modern digital landscape.
          </p> 
        </CardContent>
      </CardActionArea>
      </Card>
   </Box>
   <Box className="mx-auto "> 
   <Card className="md:h-[410px] h-[420px] text-justify"> 
      <CardActionArea>  
      <Lottie className="w-full h-[220px]" animationData={uidesign} /> 
        <CardContent> 
          <h3 className=" text-gray-900 font-semibold font-nato md:text-2xl text-xl">
          Web Design & Development  
          </h3> 
          <p className="text-base font-nato">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p> 
         </CardContent> 
       </CardActionArea>
      </Card>
      </Box>
   <Box className="mx-auto "> 
   <Card className="md:h-[410px] h-[420px] text-justify"> 
      <CardActionArea>  
      <Lottie className="w-full h-[220px]" animationData={branding} /> 
        <CardContent> 
          <h3 className=" text-gray-900 font-semibold font-nato md:text-2xl text-xl">
          Web Design & Development  
          </h3> 
          <p className="text-base font-nato">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p> 
         </CardContent> 
       </CardActionArea>
      </Card>
      </Box>
      </Slider>
      </>

  );
};

export default SkillSlider;