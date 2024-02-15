import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleBookMarks, handleTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-blue-500">All blogs are : {blogs.length}</h1>
      <div className="">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookMarks={handleBookMarks}
            handleTime={handleTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
