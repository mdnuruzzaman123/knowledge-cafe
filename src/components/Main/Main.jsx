import { useState } from "react";
import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMarks/BookMarks";

const Main = () => {
  // use state
  const [bookMark, setBookMark] = useState([]);

  // handle click
  const handClickBookMark = (blog) => {
    if (bookMark.includes(blog)) {
      const updateBookMark = bookMark.filter((bookM) => bookM !== blog);
      console.log(updateBookMark);
      setBookMark(updateBookMark);
    } else {
      const newBookMark = [...bookMark, blog];
      setBookMark(newBookMark);
    }
  };
  return (
    <div className="grid grid-cols-5 md:grid-cols-3 grid-rows-1 gap-3 md:gap-7 mx-3 md:mx-7 lg:mx-20 xl:mx-52 2xl:mx-64 mt-8">
      <Blogs handClickBookMark={handClickBookMark}></Blogs>
      <BookMarks bookMark={bookMark}></BookMarks>
    </div>
  );
};

export default Main;
