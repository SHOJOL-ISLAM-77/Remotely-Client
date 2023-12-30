


import { useEffect, useState } from "react";

const Team = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("./team.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTeam(data);
      });
  }, []);

  return (
    <div>
      <h3>Meet The Team</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      {team.map((member, index) => (
        <div key={index} className="bg-[#f3f6ff] flex justify-center items-center ">
          <div className="w-full ml-1 mr-1 flex flex-col justify-center items-center sm:w-96 border-gray-700 text-center">
            <div className="w-full rounded-2xl p-8 text-white bg-gradient-to-br from-[#5f99f9] to-[#8868dc] pb-44 relative">
              <h1 className="text-xl mb-4">{member.title}</h1>
              <p>You can contact us whenever you need help or just curious about something.</p>
              <button className=" gradient bg-[#D07189] text-white rounded-md p-2 mt-4 hover:shadow-xl transition-all duration-200 ease-in">Portfolio</button> 
            </div>
            <div className="text-center bg-white shadow-lg w-[80%] rounded-xl -mt-32 z-10 p-9 flex items-center flex-col">
              <h2 className="font-semibold text-xl">{member.name}</h2>
              <img src="https://pbs.twimg.com/profile_images/1602443868527595520/cOjnC2Zh_400x400.jpg" className="w-[40%] rounded-full mt-7" alt="Profile" />
              <p className="mt-3 font-semibold text-lg">{member.name}</p>
              <span className="text-slate-500 rounded-xl border-slate-100 text-sm mt-2 pl-3 pr-3 border-[1px]">
                <span className="bg-green-500 w-2 h-2 rounded-full mt-0.5 inline-block"></span> Active
              </span>
              <div className="flex items-center justify-between gap-8 mx-auto ">
              <button className="w-full gradient bg-[#D07189] text-white rounded-md p-2 mt-4 hover:shadow-xl transition-all duration-200 ease-in">Hire Now</button> 
          
                </div> 
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Team;
