import SkillSlider from "./SkillSlider";

const Skills = () => { 
  return (
    <div className=" my-28">
          <p className=" text-4xl text-primary font-caveat mb-3">
        Crafted to navigate the ever-changing 
      </p>
      <h3 className="lg:text-2xl md:text-xl text-lg text-text-color font-semibold uppercase font-cinzel leading-loose">
        Explore comprehensive skill set,
      </h3>
      <div className="my-12">
        <SkillSlider></SkillSlider>
      </div>
    </div>
  );
};

export default Skills;
