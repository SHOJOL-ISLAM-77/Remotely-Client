import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import "../Banner/Banner.css"
import { useEffect, useState } from "react";
import { FaAngleUp,  } from "react-icons/fa";

const WhatWeDoCarousel = () => {
  const [weDo, setWeDo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./whatWeDo.json");
        const data = await response.json();
        setWeDo(data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <Swiper
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 2000, 
        disableOnInteraction: false, 
      }}
      modules={[FreeMode, Autoplay]}
      breakpoints={{
        // When window width is <= 500px, display 1 slide
        500: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // When window width is <= 768px, display 1 slide
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // When window width is <= 1024px, display 2 slides
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // When window width is <= 1280px, display 3 slides
        1280: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // When window width is <= 1280px, display 3 slides
        1580: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        // When window width is > 1280px, display 4 slides
        9999: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      
    >
      {weDo?.map((WeDo) => (
        <SwiperSlide key={WeDo?.title}>
          <div className="relative hover-effect text-center box-border p-8 text-black bg-gray-200 min-h-[400px] max-h-[400px] overflow-hidden transition ease-in-out delay-150 hover:translate-y-1 hover:scale-y-110 hover:bg-primary rounded-lg duration-300">
            <img
              className="w-36 mx-auto"
              src={WeDo?.imageLink}
              alt="What We Do Image"
            />

            <br />
            <h2 className="text-black font-bold xl:text-3xl text-2xl ">{WeDo?.title}</h2>
            <br />

            <div className="h-32">
              {WeDo?.length > 20 ? (
                <p>{WeDo?.description}</p>
              ) : (
                <p>{WeDo?.description.slice(0, 100)} </p>
              )}
            </div>
            <div className="hover:shadow-xl cursor-pointer btn-effect absolute -bottom-24 right-1/2 text-white bg-secondary w-10 text-center flex justify-center items-start rounded-xl py-3 text-2xl">
              <FaAngleUp/>
              <br />
              <br /> 
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WhatWeDoCarousel;
