import "./Loader.css"
const Loader = () => {

  return (
    <div className="flex justify-center items-center my-9">
      <div className="w-[160px] h-[160px] border-l-[5px] border-solid border-[#38ff8e] rounded-[50%] animate-spin-back relative shadow-sm shadow-[#96fbc2]"></div>
      <div className="w-[130px] h-[130px] border-l-[5px] border-solid border-[#38eeff] rounded-[50%] animate-spin-middle absolute shadow-sm shadow-[#96f3fb]"></div>
      <div className="w-[100px] h-[100px] border-l-[5px] border-solid border-[#384fff] rounded-[50%] animate-spin-back absolute shadow-sm shadow-[#96a3fb]"></div>
    </div>
  );
};

export default Loader;
