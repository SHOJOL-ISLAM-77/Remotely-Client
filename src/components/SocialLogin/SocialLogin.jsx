
// // import useAuth from "../../Hooks/useAuth";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// // import Modal from "react-modal";
// import googleIcon from "../../assets/icons/google.png";
// import { useState } from "react";


// const SocialLogin = () => {
//   const navigate = useNavigate();   
//   const {user, googleSignIn} =  useAuth();  
//   const axiosPublic = useAxiosPublic(); 
//   const [isModalOpen, setIsModalOpen] = useState(false);
  
//   const handleGoogleSign = () => {
//     {
//       user ?  googleSignIn()
//       .then(result => { 
      
//        const userInfo = {
//           email : result.user?.email,
//           name: result.user?.displayName 
//        }
//        axiosPublic.post("/users", userInfo)
//        .then(res => {
//        toast.success("User loggedin Successfully!", { duration: 3000 });    
//        navigate("/");      
//        console.log(res.data); 

//        })

//       })
//       :
//       setIsModalOpen(true);
//     }
      
//   }
//   const handleRegister = () => {
//     // Redirect to the register page
//     navigate("/register");
//     setIsModalOpen(false); // Close the modal after redirection
//   };

//     return (
//       <div className="flex items-center">
//          <button onClick={handleGoogleSign} >  
//            <img className=" w-8 h-8" src={googleIcon} alt="" /> 
//          </button>
//          {isModalOpen && (
//         <div className="modal">
//           <div className="modal-box">
//             <h3 className="text-lg font-bold">Hello!</h3>
//             <p className="py-4">This modal works without a specific modal library!</p>
//             <button onClick={handleRegister} className="bg-pink p-2">
//               Register
//             </button>
//           </div>
//           <label className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
//             Close
//           </label>
//         </div>
//       )}
//       </div>
//     );
// };

// export default SocialLogin;
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import googleIcon from "../../assets/icons/google.png";

const SocialLogin = () => {
  const navigate = useNavigate();
  const { user, googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGoogleSign = () => {
    user ?  googleSignIn()
        .then((result) => {
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            toast.success("User logged in Successfully!", { duration: 3000 });
            navigate("/");
            console.log(res.data);
          });
        })
        .catch((error) => {
          console.error(error);
        }) : setIsModalOpen(true);
    
      // If the user is not logged in, show the moda
  };

  const handleRegister = () => {
    // Redirect to the register page
    navigate("/register");
    setIsModalOpen(false); // Close the modal after redirection
  };

  return (
    <div className="flex items-center">
      <button onClick={handleGoogleSign}>
        <img className="w-8 h-8" src={googleIcon} alt="" />
      </button>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}></div>
            <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
              <div className="modal-content py-4 text-left px-6">
                <h3 className="text-lg font-bold">Join Us!</h3>
                <p className="py-4">Sign up to become part of our amazing community and unlock exciting features!</p>
                <button className=" bg-pink-600 p-2 text-white rounded-md focus:outline-none"
                  onClick={handleRegister}
                  
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SocialLogin;
