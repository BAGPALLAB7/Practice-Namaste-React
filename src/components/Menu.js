import ShimmerDish from "./ShimmerDish";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/Store/cartSlice";

const Menu = (props) => {
  const { itemCards, index, setShow } = props;
  const dispatch = useDispatch();
  const handleAddItem = (menu) => {
    dispatch(addItem(menu));
  };

  return (
    <div className="p-3">
      {itemCards.map((menu) => {
        return (
          <div
            className="flex justify-between my-2 border-gray-400 border-b-2"
            key={menu.card?.info?.id}
          >
            <div className="my-2 w-7/12">
              <h3 className="font-bold px-2 ">{menu.card?.info?.name}</h3>
              <p className="p-1 ">
                ₹
                {menu.card?.info?.price
                  ? menu.card?.info?.price / 100
                  : menu.card?.info?.defaultPrice / 100}
              </p>
              <p className=" p-1 text-xs">{menu.card?.info?.description}</p>
            </div>
            <div className="w-32 m-2 cursor-pointer" onClick={() => handleAddItem(menu.card?.info)}>
              <div className="flex justify-center">
                <span className="absolute p-1 bg-black text-white font-bold bg-opacity-60 items-center hover:bg-white hover:text-black rounded-lg">
                  Add+
                </span>
              </div>
              {menu.card?.info?.imageId ? (
                <img
                  src={CDN_URL + menu.card?.info?.imageId}
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
  );
};
export default Menu;
