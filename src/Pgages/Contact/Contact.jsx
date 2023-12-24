import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { IoIosArrowDown } from "react-icons/io";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  return (
    <div id="contact" className=" mt-36"> 
     <div className="bg-primary text-white top-0 text-center py-8 lg:max-w-[250px] md:w-full mx-auto rounded-lg mb-12">
    <h3 className="text-3xl font-cinzel font-black ">Contact Us</h3>
  {/* Add other content as needed */}
   </div>
<div className="grid lg:grid-cols-12 lg:grid-rows-1 grid-cols-1 px-5 md:gap-5">
<div className="col-span-4">
     <ContactLeft></ContactLeft>
   </div>
     <div className="col-span-8">
     <div className="mx-auto lg:max-w-[650px] md:w-full">
        <form>
          <div className="flex lg:flex-row flex-col gap-5 px-3 w-full">
            <div className="mb-5 w-full">
              <label
                htmlFor="fName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Name
              </label>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="First Name"
                className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
              />
            </div>

            <div className="mb-5 w-full">
              <label
                htmlFor="lName"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Company
              </label>
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder="Write your company name"
                className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
              />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center px-3 gap-5">
            <div className="w-full">
              <div className="mb-5 relative">
                <label
                  htmlFor="companyEmployees"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company Employees
                </label>
                <select
                  name="companyEmployees"
                  id="companyEmployees"
                  className="w-full appearance-none rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                >
                  <option value="" disabled defaultValue>
                    Select a topic
                  </option>
                  <option value="1-5">1-5</option>
                  <option value="5-20">5-20</option>
                  <option value="20-50">20-50</option>
                  <option value="50-100">50-100</option>
                  <option value="more">More</option>
                </select>
                <div className="absolute inset-y-0 right-0 px-2 py-2  mt-8  flex items-center pointer-events-none">
                  <IoIosArrowDown className="text-lg text-black font-black" />
                </div>
              </div>
              <div className="mb-5 relative">
                <label
                  htmlFor="topic"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Talk About
                </label>
                <div className="relative">
                  <select
                    name="topic"
                    id="topic"
                    className="w-full appearance-none rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                  >
                    <option value="" disabled defaultValue>
                      Select a topic
                    </option>
                    <option value="web-development">Web Development</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="marketing-branding">
                      Marketing & Branding
                    </option>
                    <option value="affiliate">Affiliating</option>
                    <option value="seo">SEO</option>
                    <option value="mobile-app-development">
                      Mobile App Development
                    </option>
                  </select>
                  <div className="absolute inset-y-0 right-0  flex items-center px-2 pointer-events-none">
                    <IoIosArrowDown className="text-lg font-bold" />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                />
              </div> 
            </div>
            <div className="w-full -mt-5 ">
              <div className="border-[#E47D9C]">
                <h6 className="mb-3">Country</h6>
                <CountrySelect
                  onChange={(e) => {
                    setCountryid(e.id);
                  }}
                  placeHolder="Select Country"
                />
                <h6 className="m-3">State</h6>
                <StateSelect
                  countryid={countryid}
                  onChange={(e) => {
                    setstateid(e.id);
                  }}
                  placeHolder="Select State"
                />
                {/* <h6 className="my-3">City</h6> */}
                {/* <CitySelect
                  countryid={countryid}
                  stateid={stateid}
                  onChange={(e) => {
                    console.log(e);
                  }}
                  placeHolder="Select City"
                /> */}
                <h6 className="my-3">Language</h6>
                <LanguageSelect
                  onChange={(e) => {
                    console.log(e);
                  }}
                  placeHolder="Select Language"
                />
              </div>
            </div>
          </div>
          <div className="relative mb-4 px-3">
            <label
              htmlFor="message"
              className="block font-semibold text-sm leading-none mb-3"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading text-sm focus:ring-0  border border-[#CCCCCC] focus:border-primary focus:shadow focus:outline-none focus:border-heading text-gray-900 rounded"
              autoComplete="off"
              spellCheck="false"
              rows={4}
              placeholder="Write your message here"
              required
            ></textarea>
            <p className="text-red-500 text-xs mt-1"></p>
          </div>
          <div>
            <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
     </div>
</div>
    </div>
  );
};

export default Contact;
