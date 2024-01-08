import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import logo from "../utils/image/logo.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-200 h-24 items-center shadow-xl shadow-blue-100">
      <div className="">
        <Link to="/">
          <img className="w-28 mx-6" src={logo} alt="food-logo" />
        </Link>
      </div>
      <div className="flex">
        <ul className="flex">
          <li className="mx-3">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-3">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="mx-3">
            
              <Link to="/grocery">
                Grocery
              </Link>
            
          </li>
          <button
            className="mx-4"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
