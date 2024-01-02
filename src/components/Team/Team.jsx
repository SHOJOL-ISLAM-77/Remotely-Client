import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "../SectionTitle/SectionTitle";

const Team = () => {
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
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {teams.map((team, index) => (
          <SwiperSlide key={index}>
            <div className="flex xl:px-40 items-center mx-auto my-16 flex-col lg:flex-row gap-6 p-6 justify-between">
              <div className="col-span-5">
                <img
                  className="lg:h-[250px] h-[150px] mx-auto"
                  src={team.image}
                  alt={team.title}
                />
              </div>
              <div className="text-center">
                <p className="text-[#E57D9D] font-caveat md:text-4xl text-2xl ">
                  {team.title}
                </p>
                <p className="lg:text-xl text-base text-center font-nato pt-2 text-black">
                  {team.quote}
                </p>
                <br />
                {team.links && (
                  <div className="flex gap-5 justify-center ">
                    {team.links.linkedin && (
                      <>
                        <a
                          href={team?.links?.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="h-12"
                            src="https://i.ibb.co/5kZm78V/linkedin.png"
                            alt=""
                          />
                        </a>
                      </>
                    )}
                    {team.links.facebook && (
                      <>
                        <a
                          href={team?.links?.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="h-12"
                            src="https://i.ibb.co/BN858DR/facebook.png"
                            alt=""
                          />
                        </a>
                      </>
                    )}
                    {team.links.site && (
                      <>
                        <a
                          href={team?.links?.site}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="h-12"
                            src="https://i.ibb.co/Nm71LrL/www.png"
                            alt=""
                          />
                        </a>
                      </>
                    )}
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Team;
