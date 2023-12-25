
// import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import googleIcon from "../../assets/icons/google.png";


const SocialLogin = () => {
  const navigate = useNavigate();   
  const {googleSignIn} =  useAuth();  
  const axiosPublic = useAxiosPublic(); 
  
  const handleGoogleSign = () => {
       googleSignIn()
       .then(result => { 
       
        const userInfo = {
           email : result.user?.email,
           name: result.user?.displayName 
        }
        axiosPublic.post("/users", userInfo)
        .then(res => {
        toast.success("User loggedin Successfully!", { duration: 3000 });    
        navigate("/");      
        console.log(res.data); 

        })

       })
  }
    return (
      <div className="flex items-center">
         <button onClick={handleGoogleSign} >  
           <img className=" w-8 h-8" src={googleIcon} alt="" /> 
         </button>
      </div>
    );
};

export default SocialLogin;