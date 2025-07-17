import React, { useState } from "react";
import UploadPost from "../molecules/UploadPost";
import UploadProduct from "../molecules/UploadProduct";

const Dashboard = () => {
  // conditional rendering

  const [showPostForm, setShowPostForm] = useState(false);
  const [showProductForm , setShowProductForm] = useState(false)


  return (
    <div className="container mt-5">
      <div>
        <h2>Welcome to the secure Dashboard </h2>
        <p> Only the logged in User can see this page </p>
        <p> How will we acheive this ?????</p>

        <h4> Seesion Management </h4>
        <p>
          
          By using IsAuthorised higher order component function which is calling
          backend for verification of token{" "}
        </p>
      </div>

      <div>
        <h2> Welcome {localStorage.getItem("username")} </h2>





        <button onClick={() => {setShowPostForm(!showPostForm); }} className="btn btn-outline-primary" disabled ={showProductForm}>
          
          {showPostForm ? "cancel" : " Add Post"}

        </button>



        <button onClick={()=>{setShowProductForm(!showProductForm)}} className="btn btn-outline-success ms-3" disabled = {showPostForm} >

        {showProductForm ? "cancel" : " Add Product"}
        
        </button>
          

          {/* ternary operator */}

        {/* routing logic will be better rather than manually disabling the buttons */}

        {showPostForm === true && <UploadPost />}

        {showProductForm === true  && <UploadProduct/>}


      </div>
    </div>
  );
};

export default Dashboard;
