import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import ShimmerDish from "./ShimmerDish";
import { useState } from "react";
import { clearCart } from "../utils/Store/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  let price = 0;
  cartItem.map((i) => {
    price += i.price ? i.price / 100 : i.defaultPrice / 100;
  });
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  // setTotalPrice((previous) => previous+(i.price ? i.price / 100 : i.defaultPrice / 100));

  return (
    <div className="flex w-8/12 m-auto justify-between">
      <div className="h-[600px]  border-gray-300  overflow-y-auto">
        {cartItem.map((i) => {
          return (
            <div
              className="flex my-2 border-gray-400 border-b-2 w-full "
              key={i.id}
            >
            
                <div className="my-2 w-full">
                  <h3 className="font-bold px-2 ">{i.name}</h3>
                  <p className="p-1 ">
                    ₹{i.price ? i.price / 100 : i.defaultPrice / 100}
                  </p>
                  <p className=" p-1 text-xs">{i.description}</p>
                </div>
                <div className="w-32 m-2">
                  {i.imageId ? (
                    <img
                      src={CDN_URL + i.imageId}
                      alt="menu_img"
                      className="w-32 h-full rounded-3xl"
                    />
                  ) : (
                    <ShimmerDish />
                  )}
                </div>
              
            </div>
          );
        })}
      </div>
      <div className="w-4/12 h-60 text-center ">
        <h1 className=" p-4  text-2xl font-bold">
          Item count: {cartItem.length}{" "}
        </h1>
        <h1 className="p-4  text-md font-bold">Total : ₹{price.toFixed(2)}</h1>
        {cartItem.length >0  ?
        <button className="p-2 bg-red-400 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        : <button className="p-2 bg-gray-200 rounded-lg cursor-auto">Clear Cart</button>}
      </div>
    </div>
  );
};

export default Cart;
