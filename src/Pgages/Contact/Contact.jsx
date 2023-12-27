import { useState, useRef } from "react";
import {
  // CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { IoIosArrowDown } from "react-icons/io";
import ContactLeft from "./ContactLeft";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  // const [countryid, setCountryid] = useState(0);
  // const [stateid, setstateid] = useState(0);

  const [countryid, setCountryid] = useState(""); // or useState('')
  const [stateid, setstateid] = useState(""); // or useState('')
  const [languageId, setLanguageId] = useState(""); // or useState('')

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [selectedCompanyEmployees, setSelectedCompanyEmployees] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (input) => {
    const gmailRegex = /^[a-zA-Z0-9._-]+@gmail.com$/;
    return gmailRegex.test(input);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate name, email, message, and dropdowns
    if (!name.trim()) {
      setNameError("Name is required");
      return;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid Gmail address");
      return;
    } else {
      setEmailError("");
    }

    if (!selectedCompanyEmployees || !selectedTopic || !selectedDate) {
      // You can display an error message or handle it as needed
      return;
    }

    if (!message.trim()) {
      setMessageError("Message is required");
      return;
    } else {
      setMessageError("");
    }

    // Prepare the data to be sent
    // const data = {
    //   user_name: name,
    //   user_email: email,
    //   message: message,
    //   company_employees: selectedCompanyEmployees,
    //   talk_about: selectedTopic,
    //   date: selectedDate,
    //   country: countryid,
    //   state: stateid,
    //   language: "", // You can add the selected language here
    // };

    // Send email using emailjs
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
    <div id="contact">
      <div className="bg-primary text-white top-0 text-center py-8 lg:max-w-[250px] md:w-full mx-auto rounded-lg mb-12">
        <h3 className="text-3xl font-cinzel font-black mt-24">Contact Us</h3> 
        {/* Add other content as needed */}
      </div>
      <div className="grid lg:grid-cols-12 lg:grid-rows-1 grid-cols-1 px-5 md:gap-5">
        <div className="col-span-4">
          <ContactLeft></ContactLeft>
        </div>
        <div className="col-span-8">
          <div className="mx-auto lg:max-w-[650px] md:w-full">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex lg:flex-row flex-col gap-5 px-3 w-full">
                <div className="mb-5 w-full">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="fName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-normal text-gray-900 outline-none focus:border-primary focus:shadow-md"
                  />
                  {nameError && (
                    <p className="text-red-500 text-xs mt-1">{nameError}</p>
                  )}
                </div>
                <div className="mb-5 w-full">
                  <label
                    htmlFor="email"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your gmail"
                    className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base  font-normal text-gray-900 outline-none focus:border-primary focus:shadow-md"
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
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
                      name="company_employees"
                      id="companyEmployees"
                      value={selectedCompanyEmployees}
                      onChange={(e) =>
                        setSelectedCompanyEmployees(e.target.value)
                      }
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
                  <div className="mb-5 relative">
                    <label
                      htmlFor="topic"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Talk About
                    </label>
                    <div className="relative">
                      <select
                        name="talk_about"
                        id="selectedTopic"
                        value={selectedTopic}
                        onChange={(e) => setSelectedTopic(e.target.value)}
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
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full rounded-md border border-[#CCCCCC] bg-white py-2 px-6 text-base font-medium text-gray-900 outline-none focus:border-primary focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full -mt-5 ">
                  <div className="border-[#E47D9C]">
                    <h6 className="mb-3">Country</h6>
                    <CountrySelect
                      name="country"
                      onChange={(selectedCountry) => {
                        console.log("Selected Country:", selectedCountry);
                        setCountryid(selectedCountry.id); // Adjust property based on the log
                      }}
                      placeHolder="Select Country"
                    />
                    <h6 className="m-3">State</h6>
                    <StateSelect
                      name="state"
                      countryid={countryid}
                      onChange={(selectedState) => {
                        console.log("Selected State:", selectedState);
                        setstateid(selectedState.id); // Adjust property based on the log
                      }}
                      placeHolder="Select State"
                    />

                    <h6 className="my-3">Language</h6>
                    <LanguageSelect
                      name="language"
                      onChange={(selectedLanguage) => {
                        setLanguageId(selectedLanguage.code); // or use the appropriate property for the language ID
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
                  type="text"
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="px-4 py-3 flex items-center w-full appearance-none transition duration-300 ease-in-out text-heading  focus:ring-0  border border-[#CCCCCC] focus:border-primary focus:shadow focus:outline-none focus:border-heading  font-normal text-base text-gray-900rounded"
                  autoComplete="off"
                  spellCheck="false"
                  rows={4}
                  placeholder="Write your message here"
                  required
                ></textarea>
                {messageError && (
                  <p className="text-red-500 text-xs mt-1">{messageError}</p>
                )}
                <p className="text-red-500 text-xs mt-1"></p>
              </div>
              <div className="px-3">
                <button
                  // data-variant="flat"
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
