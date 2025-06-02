import React, { useState } from "react";
import { toast } from "react-toastify";

const UploadPost = () => {
  // form hooks

  const [postTitle, setPostTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [postDesc, setPostDesc] = useState("");
  const [image, setImage] = useState(null);

  const uploadPost = (e) => {
    e.preventDefault();

    try {

            // axios call     //localhost:4000/add/post   

            console.log(e)


    } catch (error) {
      toast.error("Network Error!");
      console.error(error);
    }
  };

  return (
    <div className="mt-3">
      <form>
        <input
          placeholder="Title"
          type="text"
          value={postTitle}
          className="form-control mb-3"
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
        />

        <input
          placeholder="Short Description"
          type="text"
          value={shortDesc}
          className="form-control mb-3"
          onChange={(e) => {
            setShortDesc(e.target.value);
          }}
        />

        <input
          placeholder="Description in 300 words"
          type="text"
          value={postDesc}
          className="form-control mb-3"
          onChange={(e) => {
            setPostDesc(e.target.value);
          }}
        />

        <input
          placeholder="Select Image"
          type="file"
          className="form-control"
        />

        <button
          onClick={(e) => {
            uploadPost(e);
          }}
          className="btn btn-outline-success mt-3"
        >
          {" "}
          Post
        </button>
      </form>
    </div>
  );
};

export default UploadPost;
