import { useContext, useEffect, useRef, useState } from "react";
import { ImageUpload } from "../../Utils/UploadImage";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { AuthContext } from "../../Provider/AuthProvider";
import { createProjects } from "../../API/UserProjects/UserProjects";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddProject = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const visibleElementRef = useRef(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [skills, setSkills] = useState([]);
  const [searchSkills, setSearchSkills] = useState([]);
  const [usesSkills, setUsesSkills] = useState([]);
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    axiosPublic("/api/v1/get-skills/0").then((data) => {
      setSkills(data.data);
    });
  }, [axiosPublic]);

  const handleInput = () => {
    inputRef.current.click();
  };
  const handleImage = async (event) => {
    const photo = event.target.files[0];

    const imageData = await ImageUpload(photo);
    setPhoto(imageData.data.display_url);
  };

  const handleSelectSkill = (e) => {
    const res = usesSkills.find((skill) => skill == e.target.value);
    if (!res) {
      setUsesSkills([...usesSkills, e.target.value]);
    }
  };
  const handleSkillsDelete = (i) => {
    const newArray = [...usesSkills];
    newArray.splice(i, 1);
    setUsesSkills(newArray);
  };

  const handleSelect = async (e) => {
    const inputValue = e.target.value.toLowerCase();

    const filtered = skills.filter((item) =>
      item.name.toLowerCase().includes(inputValue)
    );
    setSearchSkills(filtered.map((item) => item.name));
  };

  const handleTable = () => {
    if (visibleElementRef.current) {
      visibleElementRef.current.style.display = "block";
    }
  };
  const handleTableDelete = () => {
    if (visibleElementRef.current) {
      visibleElementRef.current.style.display = "none";
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const email = user.email;
    const data = { title, description, usesSkills, photo, email };
    console.log(data);
    const res = await createProjects(data);
    if (res.acknowledged) {
      navigate("/dashboard/profile");
      toast.success("Your Projects Upload Successfully!", { duration: 3000 });
    }
  };
  return (
    <div className="ml-24 ">
      <h1 className="p-10 text-5xl text-black font-bold ">
        Let's begin .....{" "}
      </h1>
      <form onSubmit={handleForm}>
        <div className="flex items-center xl:gap-32">
          <div
            onClick={handleInput}
            className="cursor-pointer m-5 border-2 p-5 max-w-2xl rounded-lg"
          >
            <img
              src={`${
                photo
                  ? photo
                  : "https://i.ibb.co/dLr5PKT/Screenshot-2024-01-10-224612.png"
              }`}
            />
            <input
              type="file"
              ref={inputRef}
              onChange={handleImage}
              className="hidden"
            />
            <button
              type="button"
              className="text-center my-4 text-xl px-4 cursor-pointer  text-white rounded-lg py-3 bg-secondary"
            >
              Upload Photo
            </button>
          </div>
          <div>
            <input
              type="text"
              name="title"
              required
              className="block bg-white text-black outline-none border-l-2 px-3 border-gray-500 h-[70px] w-full text-4xl"
              placeholder="Title........"
            />
            <br />
            <textarea
              name="description"
              cols="70"
              rows="10"
              required
              className="block bg-white text-black outline-none border-l-2 px-3 border-gray-500 text-xl"
              placeholder="Description........"
            ></textarea>
          </div>
        </div>
        <div className="border flex">
          <div className="flex flex-wrap gap-4 box-border p-2">
            {usesSkills.length > 0 &&
              usesSkills?.map((skills, i) => (
                <p
                  className="bg-gray-200 px-3 py-2 rounded-md flex gap-2 items-center text-black"
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
              onClick={handleTable}
              onChange={handleSelect}
              placeholder="Select uses skills"
              className="p-3 mb-2 rounded-t-md bg-white border-2 border-gray-400 text-gray-500 outline-none w-64"
              type="text"
              name="s"
            />

            <div
              className="absolute right-0 -bottom-[134px] hidden"
              ref={visibleElementRef}
            >
              {searchSkills.length > 0 && (
                <select
                  size={"5"}
                  onClick={handleSelectSkill}
                  className="p-3 rounded-b-md no-scrollbar bg-white border-2 border-gray-400 text-gray-500 outline-none w-64 "
                  name="skills"
                >
                  {searchSkills?.slice(0, 5).map((search, i) => (
                    <option value={search} onClick={handleTableDelete} key={i}>
                      {search}
                    </option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center my-10 mx-10">
          <button
            type="submit"
            className="px-10 py-3 text-white rounded-lg bg-secondary"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
