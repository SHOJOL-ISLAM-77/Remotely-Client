import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getUser, updateUser } from "../../API/User/User";
import { FaEdit, FaSave, FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { ImageUpload } from "../../Utils/UploadImage";
import toast from "react-hot-toast";

const Profile = () => {
  const axiosPublic = useAxiosPublic();
  const [dbUser, setDbUser] = useState({});
  const [edit, setEdit] = useState(false);
  const { user, updateUserProfile } = useContext(AuthContext);
  const inputRef = useRef(null);
  const [timeZone, setTimeZone] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [skills, setSkills] = useState([]);
  const [searchSkills, setSearchSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch("/Job.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
      });
  }, []);

  useEffect(() => {
    axiosPublic("/api/v1/get-timeZone").then((data) => {
      setTimeZone(data.data);
    });
  }, [axiosPublic]);

  useEffect(() => {
    axiosPublic("/api/v1/get-skills/0").then((data) => {
      setSkills(data.data);
    });
  }, [axiosPublic]);

  const handleSkills = async (e) => {
    const job = e.target.value;

    await axiosPublic(`/api/v1/get-skills/${job.split(",")[0]}`).then(
      (data) => {
        setSkills(data.data);
      }
    );
  };

  const handleInput = () => {
    inputRef.current.click();
  };
  const handleSelect = async (e) => {
    const inputValue = e.target.value.toLowerCase();

    const filtered = skills.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );
    setSearchSkills(filtered.map((item) => item.name));
  };

  const handleImage = async (event) => {
    const photo = event.target.files[0];

    const imageData = await ImageUpload(photo);
    setPhoto(imageData.data.display_url);
  };

  useEffect(() => {
    setTimeout(async () => {
      const res = await getUser(user?.email);
      await setDbUser(res);
      const arr = selectedSkills.concat(res.selectedSkills);
      setPhoto(dbUser?.photo);
      setSelectedSkills(arr);
    }, 1000);
  }, [user]);
  const userData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const education = form.education.value;
    const location = form.location.value;
    const job = form.work.value;
    const work = job.split(",")[1];
    console.log(job);
    const email = form.email.value;
    const language = form.language.value;
    const timeZone = form.timeZone.value;
    const about = form.about.value;

    const userData = {
      name,
      photo,
      number,
      education,
      location,
      work,
      selectedSkills,
      email,
      language,
      timeZone,
      about,
    };
    await updateUserProfile(name, photo);
    const res = await updateUser(userData);
    console.log(res);
    if (res.acknowledged) {
      setEdit(false);
      toast.success("User created Successfully!", { duration: 3000 });
    }
  };

  const handleSelectSkill = (e) => {
    const res = selectedSkills.find((skill) => skill == e.target.value);
    if (!res) {
      setSelectedSkills([...selectedSkills, e.target.value]);
    }
  };
  console.log(selectedSkills);
  const handleSkillsDelete = (i) => {
    const newArray = [...selectedSkills];
    newArray.splice(i, 1);
    setSelectedSkills(newArray);
  };
  return (
    <div className="xl:ml-40 justify-center xl:justify-start flex items-center min-h-max xl:my-7">
      {edit ? (
        <>
          <form onSubmit={userData}>
            <div className="flex border-2 rounded-lg flex-col md:flex-row">
              <div className="bg-primary text-white p-10 rounded-l-lg ">
                <div
                  onClick={handleInput}
                  className="cursor-pointer m-5 w-full mx-auto"
                >
                  <img
                    src={user.photoURL}
                    className="object-cover h-72 w-72 rounded-full mx-auto "
                  />
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleImage}
                    className="hidden"
                  />
                  <h1 className="text-center my-4 text-xl text-white rounded-lg py-3 bg-secondary">
                    Upload Photo
                  </h1>
                </div>
                <br />
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    className="bg-white p-3 outline-none text-black rounded-md"
                  />
                </div>
                <br />
                <h2 className="text-center text-xl">{dbUser?.role}</h2>
                <br />
                <div
                  className="tooltip tooltip-bottom cursor-pointer justify-center items-center hidden md:flex"
                  data-tip="Save changes "
                >
                  <button
                    type="submit"
                    className="flex gap-2 my-4 text-xl text-white rounded-lg py-2 px-5 bg-secondary"
                  >
                    Save <FaSave />
                  </button>
                </div>
              </div>
              <div className="p-10 text-black">
                <div>
                  <h3 className="border-b-2 text-xl pb-2">Some information:</h3>
                  <br />

                  <div className="flex flex-col lg:flex-row gap-10">
                    <div>
                      <p className=" ">Email: </p>
                      <input
                        disabled
                        className="p-3 mb-2 rounded-md bg-white border-b-2 text-gray-600 btn-disabled w-full"
                        placeholder={user?.email}
                        defaultValue={user?.email}
                        type="email"
                        name="email"
                      />

                      <br />
                      <p className="">Phone: </p>
                      <input
                        className="p-3 mb-2 rounded-md bg-white border-b-2 text-gray-600 outline-none w-full"
                        placeholder={
                          dbUser?.number ? dbUser.number : "+880 1532******"
                        }
                        defaultValue={dbUser?.number}
                        type="tel"
                        name="number"
                      />

                      <br />
                      <p className="">Last Education: </p>
                      <input
                        className="p-3 mb-2 rounded-md bg-white border-b-2 text-gray-500 outline-none w-full"
                        placeholder={
                          dbUser?.education
                            ? dbUser.education
                            : "Your last education"
                        }
                        defaultValue={dbUser?.education}
                        type="text"
                        name="education"
                      />

                      <br />
                      <p className="">Location: </p>
                      <input
                        className="p-3 mb-2 rounded-md bg-white border-b-2 text-gray-500 outline-none w-full"
                        placeholder={
                          dbUser?.location
                            ? dbUser.location
                            : "Type your location"
                        }
                        defaultValue={dbUser?.location}
                        type="text"
                        name="location"
                      />

                      <br />
                    </div>
                    <div>
                      <p className="">Work: </p>
                      <select
                        onChange={(e) => handleSkills(e)}
                        className="p-3 mb-2 rounded-md bg-white border-b-2 text-gray-500 outline-none w-64"
                        name="work"
                      >
                        <option
                          value={dbUser?.work ? dbUser.work : "Your Work"}
                        >
                          {dbUser?.work ? dbUser.work : "Your Work"}
                        </option>
                        {jobs?.map((job) => (
                          <option
                            value={[job?.skill_id, job?.name]}
                            key={job?.skill_id}
                          >
                            {job?.name}
                          </option>
                        ))}
                      </select>

                      <br />
                      <p className="">language: </p>
                      <select
                        className="p-3 mb-2 rounded-md bg-white border-b-2 text-gray-500 outline-none w-full"
                        name="language"
                      >
                        <option
                          value={
                            dbUser?.language ? dbUser.language : "Your language"
                          }
                        >
                          {dbUser?.language ? dbUser.language : "Your language"}
                        </option>
                        <option value={"Bangla"}>{"Bangla"}</option>
                        <option value={"English"}>{"English"}</option>
                        <option value={"Hindi"}>{"Hindi"}</option>
                      </select>

                      <br />
                      <p className="">Time zone: </p>
                      <select
                        className="p-3 mb-2 rounded-md bg-white border-b-2 text-gray-500 outline-none w-64"
                        name="timeZone"
                      >
                        <option
                          value={
                            dbUser?.timeZone
                              ? dbUser.timeZone
                              : "Your Time Zone"
                          }
                        >
                          {dbUser?.timeZone
                            ? dbUser.timeZone
                            : "Your Time Zone"}
                        </option>
                        {timeZone?.map((time) => (
                          <option value={time?.place} key={time?.place}>
                            {time?.place}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="border lg:max-w-xl">
                    <div className="flex flex-wrap gap-4 lg:w-96 box-border p-2">
                      {selectedSkills.length > 0 &&
                        selectedSkills?.map((skills, i) => (
                          <p
                            className="bg-gray-300 px-3 py-2 rounded-md flex gap-2 items-center"
                            key={i}
                          >
                            {skills}
                            <FaTrashAlt
                              onClick={() => handleSkillsDelete(i)}
                              className="cursor-pointer"
                            />
                          </p>
                        ))}
                    </div>
                    <div className="relative flex justify-end">
                      <input
                        onChange={handleSelect}
                        placeholder="Type your skills"
                        className="p-3 mb-2 rounded-t-md bg-white border-2 border-gray-400 text-gray-500 outline-none w-64"
                        type="text"
                        name=""
                      />

                      <div className="absolute right-0 -bottom-[134px]">
                        {searchSkills.length > 0 && (
                          <select
                            size={"5"}
                            onClick={handleSelectSkill}
                            className="p-3 rounded-b-md no-scrollbar bg-white border-2 border-gray-400 text-gray-500 outline-none w-64 "
                            name="skills"
                          >
                            {searchSkills?.slice(0, 5).map((search, i) => (
                              <option value={search} key={i}>
                                {search}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder={
                        dbUser?.about ? dbUser.about : "About your self"
                      }
                      defaultValue={dbUser?.about}
                      className="p-3 mb-2 rounded-md bg-white border-2 w-full text-gray-500 outline-none "
                      name="about"
                      rows="5"
                    ></textarea>
                  </div>
                  <div
                    className="tooltip tooltip-bottom cursor-pointer flex justify-center items-center md:hidden"
                    data-tip="Save changes"
                  >
                    <button
                      type="submit"
                      className="flex gap-2 my-4 text-xl text-white rounded-lg py-2 px-5 bg-secondary"
                    >
                      Save <FaSave />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <div className=" flex rounded-lg w-full xl:ml-12">
            <div className="flex justify-center items-center w-full md:w-auto">
              <div className="bg-primary text-black p-10 rounded-lg xl:rounded-l-lg max-w-sm">
                <img
                  src={user?.photoURL}
                  alt=""
                  className="object-cover lg:h-72 lg:w-72 h-52 w-52 rounded-full mx-auto"
                />
                <br />
                <h2 className="text-center text-xl">{user?.displayName}</h2>
                <br />
                <h2 className="text-center text-xl">{dbUser?.role}</h2>
                <br />
                <p className="text-justify">
                  <span className="font-bold">About Me:</span>
                  <br />
                  <br />{" "}
                  {dbUser?.about ? dbUser?.about : "Update about section"}
                </p>
                <br />
                <p className="">
                  <span className="font-bold">Email:</span>
                  <br /> {user?.email}
                </p>

                <br />
                <p className="">
                  <span className="font-bold">Phone: </span> <br />
                  {dbUser?.number ? dbUser?.number : "Add your number"}
                </p>

                <br />
                <p className="">
                  <span className="font-bold">Location: </span>
                  <br />
                  {dbUser?.location ? dbUser?.location : "Add your location"}
                </p>
                <br />
                <div className=" text-black max-w-2xl md:hidden block">
                  <div>
                    <h3 className="border-b-2 text-xl pb-2">
                      Some information:
                    </h3>
                    <br />
                    <div className=" ">
                      <div>
                        <p className="border-b pb-2">Last Education: </p>
                        <br />
                        <p className="">{dbUser?.education} </p>

                        <br />
                      </div>
                      <div>
                        <p className="border-b pb-2">Work: </p>
                        <br />
                        <p className="">
                          {dbUser?.work ? dbUser?.work : "Add your work"}{" "}
                        </p>

                        <br />
                        <p className="border-b pb-2">Skills: </p>
                        <br />
                        <div className="flex flex-wrap gap-4 box-border p-2">
                          {dbUser?.selectedSkills
                            ? dbUser.selectedSkills?.map((skills, i) => (
                                <p
                                  className="bg-green-400 px-3 py-2 rounded-md flex gap-2 items-center"
                                  key={i}
                                >
                                  {skills}
                                </p>
                              ))
                            : "Set your skills"}
                        </div>

                        <br />
                        <p className="border-b pb-2">TimeZone: </p>
                        <br />
                        <p className="">
                          {dbUser?.timeZone
                            ? dbUser?.timeZone
                            : "Update your time zone"}{" "}
                        </p>
                        <br />
                        <p className="border-b pb-2">Language: </p>
                        <br />
                        <p className="">
                          {dbUser?.language
                            ? dbUser?.language
                            : "Update your language "}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
                <br />

                <div
                  className="tooltip tooltip-bottom flex justify-center items-center"
                  data-tip="Edit Profile"
                >
                  <button
                    className="flex gap-2 my-4 text-xl text-white rounded-lg py-2 px-5 bg-secondary"
                    onClick={() => setEdit(!edit)}
                  >
                    Update
                    <FaEdit className="mx-auto text-2xl cursor-pointer" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-10 text-black max-w-2xl hidden md:block">
              <div>
                <h3 className="border-b-2 text-xl pb-2">Some information:</h3>
                <br />
                <div className=" ">
                  <div>
                    <p className="border-b pb-2">Last Education: </p>
                    <br />
                    <p className="text-gray-500">{dbUser?.education} </p>

                    <br />
                  </div>
                  <div>
                    <p className="border-b pb-2">Work: </p>
                    <br />
                    <p className="text-gray-500">
                      {dbUser?.work ? dbUser?.work : "Add your work"}{" "}
                    </p>

                    <br />
                    <p className="border-b pb-2">Skills: </p>
                    <br />
                    <div className="flex flex-wrap gap-4 box-border p-2">
                      {dbUser?.selectedSkills
                        ? dbUser.selectedSkills?.map((skills, i) => (
                            <p
                              className="bg-gray-300 px-3 py-2 rounded-md flex gap-2 items-center"
                              key={i}
                            >
                              {skills}
                            </p>
                          ))
                        : "Set your skills"}
                    </div>

                    <br />
                    <p className="border-b pb-2">TimeZone: </p>
                    <br />
                    <p className="text-gray-500">
                      {dbUser?.timeZone
                        ? dbUser?.timeZone
                        : "Update your time zone"}{" "}
                    </p>
                    <br />
                    <p className="border-b pb-2">Language: </p>
                    <br />
                    <p className="text-gray-500">
                      {dbUser?.language
                        ? dbUser?.language
                        : "Update your language "}{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
