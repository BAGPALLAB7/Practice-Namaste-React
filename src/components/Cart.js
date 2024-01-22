import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import ShimmerDish from "./ShimmerDish";
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
    <div className="flex flex-col-reverse md:flex-row md:w-8/12 m-auto justify-between py-5">
      <div className="h-[600px] border-gray-300 md:w-full overflow-y-auto p-3">
        {cartItem.map((i) => {
          return (
            <div
              className="flex my-2 border-gray-400 border-b-2 w-full pl-2"
              key={i.id}
            >
            
                <div className="my-2 w-full">
                  <h3 className="font-bold px-2 text-sm md:text-xl">{i.name}</h3>
                  <p className="p-1 text-sm">
                    ₹{i.price ? i.price / 100 : i.defaultPrice / 100}
                  </p>
                  <p className=" p-1 text-xs">{i.description}</p>
                </div>
                <div className="md:w-32 w-28 h-20 m-2">
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
      <div className=" md:w-4/12 md:h-60 h-30 text-center bg-gray-100 w-10/12 mx-auto p-3">
        <h1 className=" md:p-4 text-sm  md:text-2xl font-bold">
          Item count: {cartItem.length}{" "}
        </h1>
        <h1 className="p-4  text-sm font-bold">Total : ₹{price.toFixed(2)}</h1>
        {cartItem.length >0  ?
        <button className="p-2 bg-red-400 rounded-lg md:text-lg  text-sm" onClick={handleClearCart}>Clear Cart</button>
        : <button className="p-2 bg-gray-200 rounded-lg text-sm md:text-lg cursor-auto">Clear Cart</button>}
      </div>
    </div>
  );
};

export default Cart;
