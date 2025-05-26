import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import IsAuthorised from "../shared/IsAuthorised";

const Dashboard = () => {
  // simulate

IsAuthorised()


  return (
    <div className="container mt-5">
   
        <div>
          <h2>Welcome to the secure Dashboard </h2>
          <p> Only the logged in User can see this page </p>
          <p> How will we acheive this ?????</p>
        </div>
  
    </div>
  );
};

export default Dashboard;
