
import axios from "axios";

 const axiosSecure = axios.create({ 
      baseURL : "http://localhost:7000",  
      withCredentials: true,    
 })


export default axiosSecure; 