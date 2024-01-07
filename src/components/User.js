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
    <div className="user-card">
      <img className="avatar" src={avatar_url} alt="avatar" />
      <h2>Name : {name}</h2>
      <h4>Location: {location}</h4>
      <h4>Contact : @bagpallab7</h4>
    </div>
  );
};
export default User;
