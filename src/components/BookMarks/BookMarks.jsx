/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
const BookMarks = ({ bookMark }) => {
  return (
    <div className="col-span-2 md:col-span-1">
      <h1 className="px-3 py-2 md:px-5 md:py-3 lg:px-6 xl:px-10 2xl:px-12 lg:py-5 bg-[#6047EC1A] text-[#6047EC] text-[10px] md:text-base lg:text-xl 2xl:text-3xl font-bold rounded-lg">
        <small>Spent time on read: 177 min</small>
      </h1>
      {<BookMarkDisplay bookMark={bookMark}></BookMarkDisplay>}
    </div>
  );
};

const BookMarkDisplay = ({ bookMark }) => {
  return (
    <div className="mt-3 px-3 lg:px-5 py-2 md:mt-6  bg-[#1111110D] rounded-lg">
      <h1 className="text-black text-[10px] md:text-lg lg:text-xl 2xl:text-3xl  font-bold ">
        <small>Bookmarked Blogs : {bookMark.length}</small>
      </h1>
      {bookMark.map((bookM) => {
        return (
          <div className="bg-[#ffffff] rounded px-2 lg:px-3 py-1 text-[9px] md:text-base lg:text-lg 2xl:text-2xl font-semibold my-2">
            <h1>
              <small>{bookM.title}</small>
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default BookMarks;
