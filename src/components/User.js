import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState([]);
  const fetchUser = async () => {
    const data = await fetch("https://api.github.com/users/bagpallab7");
    const jsondata = await data.json();
    setUserData(jsondata);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const { name, avatar_url, location } = userData;

  return (
   
    <div className="user-card bg-gray-200 shadow-2xl shadow-blue-300 items-center flex my-3 h-96 p-10 rounded-xl flex-col">
      <img className="w-52 rounded-full shadow-2xl shadow-gray-600" src={avatar_url} alt="avatar" />
      <h2 className="font-bold text-4xl p-2">Name : {name}</h2>
      <h4 className="font-bold text-1xl p-2">Location: {location}</h4>
      <h4 className="font-bold text-1xl p-2">Contact : @bagpallab7</h4>
    
    </div>
  );
};
export default User;
