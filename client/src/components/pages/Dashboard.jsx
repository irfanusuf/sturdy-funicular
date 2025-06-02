import React, { useState } from "react";
import UploadPost from "../molecules/UploadPost";

const Dashboard = () => {
  // conditional rendering

  const [showform, setShowForm] = useState(false);

  return (
    <div className="container mt-5">
      <div>
        <h2>Welcome to the secure Dashboard </h2>
        <p> Only the logged in User can see this page </p>
        <p> How will we acheive this ?????</p>

        <h4> Seesion Management </h4>
        <p>
          {" "}
          By using IsAuthorised higher order component function which is calling
          backend for verification of token{" "}
        </p>
      </div>

      <div>
        <h2> Welcome {localStorage.getItem("username")} </h2>

        <button
          onClick={() => {
            setShowForm(!showform);
          }}
          className="btn btn-outline-primary"
        >
          {showform ? "cancel" : " Add Post"}
        </button>

        {showform && <UploadPost />}
      </div>
    </div>
  );
};

export default Dashboard;
