import SectionTitle from "../SectionTitle/SectionTitle";

const About = () => {
  return (
    <div id="AboutUs" className="container mx-auto px-3">
      <div>
        <SectionTitle
          heading="About Us"
          subHeading="Aliquid impedit sit, eum quae assumenda, molestiae at mollitia, architecto sequi eius ipsa fugit harum saepe. Qui porro vero voluptatum."
        />
      </div>

      <div className="flex lg:flex-row flex-col-reverse justify-evenly items-center">
        <div className="flex-1">
          <h2 className="lg:text-4xl text-2xl font-bold text-black">
            #1 Digital solution with 10 years of experience
          </h2>
          <br />
          <br />
          <p className="text-gray-600">
            Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
            labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem
            sit clita duo justo eirmod magna dolore erat amet
          </p>
          <br />
          <br />
          <br />
          <button className="hover:shadow-form rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none">
            Read More
          </button>
        </div>
        <div className="flex-1 my-3 lg:my-0">
          <img src="https://i.ibb.co/LZFtXhv/about-us-for-my-agency-boys-girls-are-talking-pr.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
