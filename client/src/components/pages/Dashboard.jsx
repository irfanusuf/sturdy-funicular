import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import loadingGIf from "../../assets/loading.gif"

const Dashboard = () => {
  // simulate

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("Authorization Token");

    if (token === "" || token === undefined || token === null) {   

        toast.error("Unauthorised!")

        setTimeout(() => {
            navigate("/login")
        }, 3000);
     
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="container mt-5">
      {loading ? (
        <div className="Loading_Animation">
          <img src={loadingGIf} alt="Loading....."/>
        </div>
      ) : (
        <div>
          <h2>Welcome to the secure Dashboard </h2>
          <p> Only the logged in User can see this page </p>
          <p> How will we acheive this ?????</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
