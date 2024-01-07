import ShimmerDish from "./ShimmerDish";
import { CDN_URL } from "../utils/constants";

const Menu = (props) => {
  const { itemCards, index, setShow } = props;
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
              <p className=" p-1 text-sm">{menu.card?.info?.description}</p>
            </div>
            <div className="w-32 m-2">
              {menu.card?.info?.imageId ? (
                <img
                  src={CDN_URL + menu.card?.info?.imageId}
                  alt="menu_img"
                  className="w-32 h-full"
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
