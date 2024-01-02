import { Link } from "react-router-dom";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <section
        className="h-[750px] px-4 pt-40 md:pt-0 flex justify-center items-center w-full bg-[url('https://i.ibb.co/YyFw6p1/Screenshot-2023-12-29-225343.png')] bg-cover"
        id="/"
      >
        <div className="lg:container mx-auto flex justify-between items-center flex-col md:flex-row">
          <div className="flex-grow mt-5 text-center">
            <h1 className="xl:text-3xl lg:text-[23px] sm:text-3xl text-3xl p-2 text-white md:bg-white lg:p-4 px-5 rounded-full inline md:text-black font-semibold">
              Freelance with Skills, Fulfill Your Dream
            </h1>
            <br />
            <br />
            <br />
            <h2 className="xl:text-xl  text-md p-2 bg-white lg:p-4 px-5 rounded-lg  font-semibold text-[#14B789]">
              We help freelancers grow by showcasing their skills and connecting
              them with global buyers. Whether you're experienced or just
              starting, our community transforms your skills into successful
              careers. Join us for exciting projects and opportunities that
              define your journey from the beginning.
            </h2>
            <br />
            <br />
            <Link to="/createUser" className="text-xl md:text-2xl bg-[#535DA1] p-4 px-5 rounded-md font-semibold text-white transition duration-300 ease-in-out hover:shadow-black shadow-lg hover:bg-white hover:text-primary">
              Let's begin
            </Link>
          </div>
          <div className="relative lg:block hidden">
            <div className="bg-white absolute rounded-full left-24 w-[390px] h-[390px]"></div>
            <img
              className="xl: max-w-lg z-10 relative 2xl:max-w-2xl"
              src="https://templatemo.com/templates/templatemo_578_first_portfolio/images/portrait-happy-excited-man-holding-laptop-computer.png"
              alt="Banner Image For Branding"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
