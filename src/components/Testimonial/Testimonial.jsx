import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import reviewIcon from "../../assets/coma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);

  return (
    <section className="">
      <div className="text-center my-6">
        <h2 className="text-5xl font-nato">Client Testimonials</h2>
        <p className="text-2xl">
          Here's what our clients have to say about their experience working
          with us.
        </p>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center md:mx-20 my-6 shadow-lg transition-transform transform hover:scale-105 duration-1000 hover:bg-primary hover:text-white p-6 hover:font-light"> 
            <FontAwesomeIcon icon={faQuoteLeft} className="text-7xl w-20  font-caveat hover:text-white mb-10 " />
                <img  className="h-[250px] mb-3 hover:scale-125 duration-1000 hover:pb-5 " src={review.image} alt="" /> 
              <Rating style={{ maxWidth: 110 }} value={review.rating} readOnly /> 
              <p className="lg:text-xl md:text-lg text-base font-medium font-nato mt-3 text-justify">{review.description}</p>
              <h3 className="text-[#CD9003] mt-3 font-nato hover:text-white lg:text-3xl md:text-2xl  text-lg font-bold">{review.name}</h3> 
              <p className="md:text-3xl text-2xl font-medium  font-caveat">{review.member_type}</p> 
 
            </div>
           
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
