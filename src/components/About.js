import SkeletonComponent from "./MUI skeleton/SkeletonComponent";
import User from "./User";
const About = () => {
  return (
    <>
    <div className="w-full p-4 md:w-6/12 mx-auto flex flex-col items-center ">
      <h1 className="font-bold md:text-4xl text-xl">About Us</h1>
      <User />
      
    </div>
    </>
  );
};
export default About;
