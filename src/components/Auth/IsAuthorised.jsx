import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loadingGIF from "../../assets/loading.gif";
import { axiosInstance } from "../../utils/axiosInstance";

const IsAuthorised = ({ children , role }  ) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [username , setUsername] = useState ("irfan ")

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await axiosInstance.get(`/user/verify/${role}`); //backend  api call  for verification

        if (res.status === 200) {
          setTimeout(() => {
            localStorage.setItem("username", res.data.payload.username);
            setLoading(false);
          }, 2000);
        }
      } catch (error) {
        setLoading(true);

        if (error.response) {
          const statusCodeARR = [400, 401, 403, 500];
          if (statusCodeARR.includes(error.response.status)) {
            toast.error(error.response.data.message); // static messsage
          }
        } else {
          toast.error("Network Error!");
        }

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    })();
  }, [navigate]);

// console.log("Children type:", typeof children);       // should be object
// console.log("Is valid element:", React.isValidElement(children)); // should be true
// console.log("children content:", children);


  if (loading) {
    return (
      <div className="Loading_container">
        <img src={loadingGIF} alt="Loading ...." />
      </div>
    );
  } else {
     // clone child with new props
     return React.isValidElement(children)
    ? React.cloneElement(children, { username })
    : children;
  }
};

export default IsAuthorised;
