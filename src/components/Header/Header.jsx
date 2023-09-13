import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 md:py-7 border-b-2 mx-5 md:mx-7 lg:mx-20 xl:mx-52 2xl:mx-64">
      <h1 className="text-xl md:text-4xl font-bold">Knowledge Cafe</h1>
      <img className="w-10 md:w-16" src={profile} alt="" />
    </div>
  );
};

export default Header;
