import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import aboutImg from "../../assets/about.webp";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const About = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("./teams.json")
      .then((res) => res.json())
      .then((data) => {
        setTeams(data);
      });
  }, []);

  return (
    <section id="o" className="container mx-auto">
      <SectionTitle
        subHeading={
          "Our talented and passionate team is dedicated to delivering exceptional digital experiences. Get to know the creative minds behind our innovative solutions."
        }
        heading={"Meet Our Creative Team"}
      ></SectionTitle>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={
          {
            // clickable: true,
          }
        }
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {teams.map((team, index) => (
          <SwiperSlide key={index}>
            <div className=" grid md:grid-cols-12 grid-cols-1 items-center mx-auto my-16  ">
              <div className="col-span-5">
                <img
                  className="lg:h-[250px] h-[150px] mx-auto"
                  src={team.image}
                  alt={team.title}
                />
              </div>
              <div className="col-span-7 lg:pr-16 flex flex-col justify-center ">
                <p className="text-[#E57D9D] font-caveat text-4xl">
                  {team.title}
                </p>
                <h4 className="lg:text-xl text-base text-justify font-nato pr-10">
                  {team.quote}
                </h4>
                <div>
                  {team.links && team.links.socialMedia && (
                    <div>
                      {Object.entries(team.links.socialMedia).map(
                        ([platform, link], i) => (
                          <a
                            key={i}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {platform}
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default About;
