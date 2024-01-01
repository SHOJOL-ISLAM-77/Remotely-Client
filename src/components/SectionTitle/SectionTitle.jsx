// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-8 text-white box-border py-6 rounded-lg bg-fixed bg-cover mx-auto border-[#E8E8E8] mb-4 bg-gradient-to-t to-primary via-[#00a476] from-secondary">
      <h3 className="font-semibold text-4xl font-noto">{heading}</h3>
      <br />
      <p className="text-lg font-openSans mx-auto w-10/12"> {subHeading} </p>
    </div>
  );
};

export default SectionTitle;
