import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPinterest } from 'react-icons/fa';

const ContactLeft = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-xl text-[#1F2937] font-noto"> <span className=" text-orange-700 font-bold  text-2xl">LET'S</span> Start A Ptoject</h3>
        <p>We are available for freelance projects</p>
      </div>
      <div className="my-5">
        <h3 className="text-xl text-[#1F2937] font-noto mb-2">Email</h3>
       <div className="flex items-center gap-3">
       <div className="bg-primary w-12 px-2 py-2 text-white rounded-md flex items-center justify-center">
          <FaEnvelope className="text-xl" />
        </div>
        <p>
          hello@josh.design
        </p>
       </div>
      </div>
      <div>
        <h3 className="text-xl text-[#1F2937] font-noto mb-2">Call Now</h3>
       <div className="flex items-center gap-3">
       <div className="bg-primary w-12 px-2 py-2 text-white rounded-md flex items-center justify-center">
          <FaPhone className="text-xl" />
        </div>
        <p>
        120-240-9600
        </p>
       </div>
      </div>
      <div className="my-5">
        <h3 className="text-xl text-[#1F2937] font-noto mb-2">Our Location</h3>
       <div className="flex items-center gap-3">
       <div className="bg-primary w-12 px-2 py-2 text-white rounded-md flex items-center justify-center">
          <FaMapMarkerAlt className="text-xl" />
        </div>
        <p>
        Rangpur, Bangladesh
        </p>
       </div>
      </div>
      <div>
        <h3 className="text-xl text-[#1F2937] font-noto mb-2">Stay Connected</h3>
        <div className="flex md:flex-wrap items-center gap-3">
          <FaFacebook className="w-10 h-8" />
          <FaTwitter className="w-10 h-8" />
          <FaLinkedin className="w-10 h-8" />
          <FaInstagram className="w-10 h-8" />
          <FaPinterest className="w-10 h-8" />
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
