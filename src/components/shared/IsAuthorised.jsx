import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loadingGIF from "../../assets/loading.gif";

const IsAuthorised = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true)
    const token = localStorage.getItem("Authorization Token");
    if (token === "" || token === undefined || token === null) {
      
      toast.error("You have been logged Out"); // notifications

      
      setTimeout(() => {
        navigate("/login");
        toast.error("Kindly login Again!"); // notifications
      }, 5000);


    } else {
      // IIF
      (async () => {
        try {
          setLoading(true);
          const url = `http://localhost:4000/verify/token?token=${token}`;

          const res = await axios.get(url); //backend  api call  for verification



          if (res.status === 200) {
            setTimeout(() => {
              localStorage.setItem("username" , res.data.resolve.username)
              setLoading(false);
            }, 3000);
          }
        } catch (error) {

          setLoading(true);

          if (error.response) {
            const statusCodeARR = [400, 401, 403, 500];
            if (statusCodeARR.includes(error.response.status)) {
              toast.error(error.response.data.message); // static messsage
            }
          }else{
            toast.error("Network Error!");
          }
         
          setTimeout(() => {
            navigate("/login");
          }, 3000);
          
        }
      })();
    }
  }, [navigate]);

  if (loading) {
    return (
      <div className="Loading_container">
        <img src={loadingGIF} alt="Loading ...." />
      </div>
    );
  } else {
    return children;
  }
};

export default IsAuthorised;
