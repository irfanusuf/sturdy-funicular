import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loadingGIf from "../../assets/loading.gif";

const IsAuthorised = () => {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("Authorization Token");

    if (token === "" || token === undefined || token === null) {
      toast.error("Unauthorised!"); // notifications

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } else {
      // IIF
      (async () => {
        try {
          const url = `http://localhost:4000/verify/token?token=${token}`;

          setTimeout(async () => {
            const res = await axios.get(url); //backend  api call  for verification

            if (res.status === 200) {
              setLoading(false);
            } else {
              setLoading(true);
            }
          }, 4000);
        } catch (error) {
          toast.error("Server Error ! try again after sometime");
          setTimeout(() => {
            navigate("/");
          }, 10000);

          console.error(error);
        }
      })();
    }
  }, [navigate]);

  return (
    <>
      {loading && (
        <div className="Loading_Animation">
          <img src={loadingGIf} alt="Loading....." />
        </div>
      )}
    </>
  );
};

export default IsAuthorised;
