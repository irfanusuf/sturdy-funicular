import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const IsAuthorised = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Authorization Token");

    if (token === "" || token === undefined || token === null) {
      toast.error("Forbidden! Token Not Found"); // notifications
      navigate("/login");
    } else {
      // IIF
      (async () => {
        try {
          const url = `http://localhost:4000/verify/token?token=${token}`;

          const res = await axios.get(url); //backend  api call  for verification

          if (res.status !== 200) {
            navigate("/login");
          }
        } catch (error) {
          if (error.response) {
            const statusCodeARR = [401, 403, 500];

            if (statusCodeARR.includes(error.response.status)) {
              toast.error(error.response.data.message); // static messsage
            }

            navigate("/login");
          }
        }
      })();
    }
  }, [navigate]);

  return null;
};

export default IsAuthorised;
