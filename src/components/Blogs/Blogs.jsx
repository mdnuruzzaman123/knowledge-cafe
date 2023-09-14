/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { FaBookmark as BsBookmark } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = ({ handClickBookMark }) => {
  // use state
  const [blogs, setBlogs] = useState([]);

  //   use effect
  useEffect(() => {
    fetch("./blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <section className=" col-span-3 md:col-span-2">
      {blogs.map((blog) => (
        <DisplayBlogCard
          key={blog.id}
          handClickBookMark={handClickBookMark}
          blog={blog}
        ></DisplayBlogCard>
      ))}
    </section>
  );
};

const DisplayBlogCard = ({ blog, handClickBookMark }) => {
  const {
    cover,
    author,
    author_img,
    posted_date,
    title,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className=" mb-7 md:mb-10 border-b-2">
      <img className="rounded md:rounded-xl" src={cover} alt="" />
      <div className="flex justify-between items-center mt-4 mb-2 md:mt-8 md:mb-5">
        <div className="flex md:items-center gap-2 md:gap-4">
          <img
            className="w-7 h-7 md:w-16 md:h-16 rounded-full"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className=" text-xs md:text-xl font-bold">
              <small>{author}</small>
            </h3>
            <p className=" text-[10px] md:text-base text-[#11111199]">
              <small>{posted_date}</small>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-[10px] md:text-lg font-medium text-[#11111199]">
            {reading_time} min read
          </p>
          <button
            onClick={() => handClickBookMark(blog)}
            className="text-black "
          >
            <BsBookmark></BsBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-sm md:text-4xl font-bold">{title}</h1>
      <div className=" grid md:flex md:items-center md:gap-4">
        {hashtags.map((hats) => {
          return (
            <a
              className="md:my-3 text-[10px] md:text-lg text-[#11111199] font-medium "
              href="../../../index.html"
            >
              <small>{hats}</small>
            </a>
          );
        })}
      </div>
      <button className=" mb-4 md:mb-7 text-[10px] md:text-lg text-[#6047EC] underline font-semibold">
        <small>Mark as read</small>
      </button>
    </div>
  );
};

export default Blogs;
