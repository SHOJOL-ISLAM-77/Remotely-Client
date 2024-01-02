import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import SectionTitle from "../SectionTitle/SectionTitle";
import axios from "axios";

const Contact = () => {
  const form = useRef();
  const [data, setData] = useState([]);
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json"
      )
      .then((res) => setData(res?.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const allCounters = [...new Set(data.map((item) => item.country))];
  allCounters.sort();

  const handleState = async (e) => {
    let states = await data.filter((item) => item?.country === e.target.value);
    states = [...new Set(states?.map((item) => item?.subcountry))];
    console.log(states);
    setState(states);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);
    emailjs
      .sendForm(
        "service_8k835ya",
        "template_cjex8xc",
        form.current,
        "SauybGelOWJJcgamt"
      )
      .then(
        (result) => {
          console.log("Message sent", result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="container mx-auto px-3 md:px-0">
      <SectionTitle heading={"Contact Us"} />
      <br />
      <div className="text-center">
        <h3 className="text-xl text-[#1F2937] font-noto">
          {" "}
          <span className=" text-orange-700 font-bold  text-2xl">LET'S </span> 
          Start A Ptoject
        </h3>
        <p>We are available for freelance projects</p>
      </div>
      <br />

      <div className="flex justify-between flex-col lg:flex-row lg:gap-14 items-center">
        <div className="col-span-4 flex-1 w-full">
          <ContactLeft></ContactLeft>
        </div>
        <div className="col-span-8">
          <div className="mx-auto lg:max-w-[650px] md:w-full">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex lg:flex-row flex-col gap-5 w-full">
                <div className="mb-3 w-full">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-normal text-gray-900 outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
                <div className="mb-3 w-full">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Enter your gmail"
                    className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base  font-normal text-gray-900 outline-none focus:border-primary focus:shadow-md"
                  />
                </div>
              </div>
              <div className=" items-center gap-5">
                <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-x-5">
                  <div className="mb-3 relative">
                    <label
                      htmlFor="companyEmployees"
                      className="mb-3 block sm:text-base text-sm font-medium text-[#07074D] "
                    >
                      Company Employees
                    </label>
                    <select
                      name="company_employees"
                      className="w-full appearance-none rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                    >
                      <option value="" disabled defaultValue>
                        Select one
                      </option>
                      <option value="1-5">1-5</option>
                      <option value="5-20">5-20</option>
                      <option value="20-50">20-50</option>
                      <option value="50-100">50-100</option>
                      <option value="50-100">50-100+</option>
                      <option value="more">None</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 px-2 py-2  mt-8  flex items-center pointer-events-none">
                      <IoIosArrowDown className="text-lg text-black font-black" />
                    </div>
                  </div>
                  <div className="mb-3 relative">
                    <label
                      htmlFor="topic"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Talk About
                    </label>
                    <div className="relative">
                      <select
                        name="talk_about"
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
                  <div className="mb-3">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Country
                    </label>
                    <select
                      onChange={(e) => handleState(e)}
                      className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                      name="country"
                      required
                    >
                       <option >Your Country</option>
                      {allCounters?.map((country) => (
                        <option value={country} key={country}>{country}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      State
                    </label>
                    <select
                      className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                      name="state"
                      required
                    >
                      <option >Your State</option>
                      {state?.map((state) => (
                        <option value={state} key={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Language
                    </label>
                    <select
                      className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                      name="language"
                      required
                    >
                      <option defaultChecked>Your Language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Bangla">Bangla</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="block font-semibold text-sm leading-none mb-3 text-[#07074D]"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  className="px-4 py-3 bg-white flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading  focus:ring-0  border border-[#CCCCCC] focus:border-primary focus:shadow focus:outline-none focus:border-heading  font-normal text-base text-gray-900rounded"
                  rows={4}
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <div className="px-3">
                <button
                  value="send"
                  type="submit"
                  className="hover:shadow-form rounded-md bg-primary py-3 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  Send Message
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
