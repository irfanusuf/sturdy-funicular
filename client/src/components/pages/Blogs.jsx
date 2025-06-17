import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  // retrive data from database
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:4000/blogs/getAll");

      if (res.status === 200) {
        setBlogs(res.data.posts);
      }
    } catch (error) {
      if (error.response) {
        if ([400, 401, 403, 500, 404].includes(error.response.status)) {
          toast.error(error.response.data.message);
        }
      } else {
        toast.error("Network Error!");
      }

      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <p style={{textAlign :"center" , paddingTop : "20px"}} > {blogs.length} blogs found! </p>

      <div className="blogs_container">
        {blogs.map((blog) => (
          <div key={blog._id} className="single_blog" >
         
    
            <img src= {blog.postImgUrl} alt="broken" width={400}/>
            <h4> {blog.postTitle} </h4>
            <p> {blog.shortDesc} </p>

            <button> ReadMore ...</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;
