import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { restoData } = props;

  const { name, cuisines, cloudinaryImageId, avgRating, id } = restoData?.info;

  return (
    <div className="w-[300px] p-2 mx-6 my-3 bg-slate-200  h-[26rem] rounded-xl">
      <div className="restaurant-details">
        <Link to={"/restaurant/" + id} key={id}>
        <div className="shadow-blue-300 shadow-2xl">
          <img
            className="rounded-t-xl h-56 w-full"
            src={CDN_URL + cloudinaryImageId}
            alt="card-image"
          />
        </div>
          <h3 className="font-bold my-2">{name}</h3>
          <p>{cuisines.join(", ")}</p>
          <p>⭐️ {avgRating}</p>
          <p>⏳ {restoData.info.sla.deliveryTime + " minutes"}</p>
        </Link>
      </div>
    </div>
  );
};

//   export default RestaurantCard;
