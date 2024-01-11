import { Link } from "react-router-dom";

const ProfileRight = () => {
  return (
    <div>
      <h1 className="text-5xl text-black font-semibold pb-5 border-b-2 mb-3">
        Some Your Best Projects
      </h1>

      <Link to="addProject">
        <div className="flex bg-gray-50 rounded-3xl box-border p-6 gap-5 cursor-pointer hover:bg-gray-100">
          <div>
            <div className="h-12 w-12 rounded-full border border-black flex flex-col justify-center items-center p-2">
              <span className="h-[3px] bg-gray-600 w-full block transition-all relative rounded-md rotate-90"></span>
              <span className="h-[3px] bg-gray-600 w-full block transition-all relative rounded-md -top-[9%]"></span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black pb-3">Add Project</h3>
            <p className="text-md text-gray-500">
              Your projects should highlight your best skills and experience.
            </p>
          </div>
        </div>
      </Link>
      <br />
      <br />
      <Link to="addProject">
        <div className="flex bg-gray-50 rounded-3xl box-border p-6 gap-5 cursor-pointer hover:bg-gray-100">
          <div>
            <div className="h-12 w-12 rounded-full border border-black flex flex-col justify-center items-center p-2">
              <span className="h-[3px] bg-gray-600 w-full block transition-all relative rounded-md rotate-90"></span>
              <span className="h-[3px] bg-gray-600 w-full block transition-all relative rounded-md -top-[9%]"></span>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-black pb-3">Add Project</h3>
            <p className="text-md text-gray-500">
              Your projects should highlight your best skills and experience.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileRight;
