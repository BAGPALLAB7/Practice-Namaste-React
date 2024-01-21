import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import logo from "../utils/image/logo.png";
import cartLogo from "../utils/image/cartIcon.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Cart items"+cartItems);

  return (
    <div className="md:flex w-screen justify-between bg-pink-200 h-32 md:h-24 items-center shadow-xl shadow-blue-100">
      <div className="w-screen md:w-6/12 flex justify-center md:justify-start h-20 md:h-auto p-0 m-0 -mt-5 md:mt-0">
        <Link to="/">
          <img className="md:w-28 w-32  h-32 md:mx-6 " src={logo} alt="food-logo" />
        </Link>
      </div>
      <div className="flex w-screen md:w-5/12 justify-center my-5">
        <ul className="flex items-center">
          <li className="md:mx-3 text-sm md:text-lg bg-pink-300 bg-opacity-40 md:bg-transparent p-1 shadow-md m-1  border rounded-md">
            <Link to="/" data-testid="header-link">Home</Link>
          </li>
          <li className="md:mx-3 text-sm md:text-lg p-1 shadow-md m-1 border rounded-md bg-pink-300 bg-opacity-40 md:bg-transparent">
            <Link to="/about">About Us</Link>
          </li>
          <li className="md:mx-3 text-sm md:text-lg p-1 shadow-md m-1 border rounded-md bg-pink-300 bg-opacity-40 md:bg-transparent">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="fixed right-3 bottom-8 md:right-0   md:bottom-0 md:relative md:mx-3 text-sm md:text-lg p-1 md:shadow-md m-1 md:border md:rounded-md">
            <Link to="/cart">
            <div className="flex  md:items-center  ">
              <img className="md:w-10 w-20 md:bg-transparent bg-red-300 bg-opacity-70 rounded-3xl" src={cartLogo} alt="cart-icon" />
              <span className="text-sm">({cartItems.length})</span>
            </div>
            </Link>
          </li>
          <li className="md:mx-3 text-sm md:text-lg p-1 bg-pink-300 bg-opacity-40 md:bg-transparent shadow-md m-1 border rounded-md ">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
          <button
            className="md:mx-3 text-sm md:text-lg p-1 bg-pink-300 bg-opacity-40 md:bg-transparent shadow-md m-1 border rounded-md "
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
