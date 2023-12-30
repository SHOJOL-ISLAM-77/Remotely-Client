
// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading, subHeading}) => { 
    return ( 
        <div className="text-center my-8 md:w-4/12 mx-auto border-[#E8E8E8] mb-4">
          <h3 className="font-semibold text-2xl font-noto">{heading}</h3>  
          <p className="text-lg font-openSans"> {subHeading} </p>
        </div>
    );
};

export default SectionTitle;