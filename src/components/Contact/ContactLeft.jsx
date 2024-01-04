import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import MapComponent from "../MapComponent/MapComponent";

const ContactLeft = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between w-full flex-col sm:flex-row">
        <div className="my-5">
          <h3 className="text-xl text-[#1F2937] font-noto mb-2">
            Our Location
          </h3>
          <div className="flex items-center gap-3">
            <div className="bg-primary w-12 px-2 py-2 text-white rounded-md flex items-center justify-center">
              <FaMapMarkerAlt className="text-xl" />
            </div>
            <p>Rangpur, Bangladesh</p>
          </div>
        </div>
        <div className="my-5">
          <h3 className="text-xl text-[#1F2937] font-noto mb-2">Email</h3>
          <a href="mailto:amimulahsan164@gmail.com">
            <div className="flex items-center gap-3">
              <div className="bg-primary w-12 px-2 py-2 text-white rounded-md flex items-center justify-center">
                <FaEnvelope className="text-xl" />
              </div>
              <p className="break-all">amimulahsan164@gmail.com</p>
            </div>
          </a>
        </div>
      </div>
      <MapComponent />
      <br />
      <div>
        <h3 className="text-xl text-[#1F2937] font-noto mb-2">
          Stay Connected
        </h3>
        <div className="flex md:flex-wrap items-center gap-3">
          <FaFacebook className="w-11 h-11 hover:text-blue-500 cursor-pointer hover:bg-white bg-primary text-white rounded-full p-2 text-2xl" />
          <FaTwitter className="w-11 h-11 hover:text-blue-500 cursor-pointer hover:bg-white bg-primary text-white rounded-full p-2 text-2xl" />
          <FaLinkedin className="w-11 h-11 hover:text-blue-500 cursor-pointer hover:bg-white bg-primary text-white rounded-full p-2 text-2xl" />
          <FaInstagram className="w-11 h-11 hover:text-red-400 cursor-pointer hover:bg-white bg-primary text-white rounded-full p-2 text-2xl" />
        </div>
      </div>
      <br />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
    </div>
  );
};

export default ContactLeft;
