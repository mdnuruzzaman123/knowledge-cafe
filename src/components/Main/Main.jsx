import Blogs from "../Blogs/Blogs";
import BookMarks from "../BookMarks/BookMarks";

const Main = () => {
  return (
    <div className="grid grid-cols-5 md:grid-cols-3 grid-rows-1 gap-3 md:gap-7 mx-3 md:mx-7 lg:mx-20 xl:mx-52 2xl:mx-64 mt-8">
      <Blogs></Blogs>
      <BookMarks></BookMarks>
    </div>
  );
};

export default Main;
