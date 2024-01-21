import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { restoData } = props;

  const { name, cuisines, cloudinaryImageId, avgRating, id } = restoData?.info;
  console.log("cdn-url for restaurant-card: "+CDN_URL);

  return (
    <div className="w-40 p-1 m-2 h-auto md:w-72 md:w-[300px] md:p-2 md:mx-6 my-3 bg-slate-200  md:h-[26rem] rounded-xl">
      <div className="restaurant-details">
        <Link to={"/restaurant/" + id} key={id}>
        <div className="shadow-blue-300 shadow-2xl">
          <img
            className="rounded-t-xl h-28 md:h-56 w-full"
            src={CDN_URL + cloudinaryImageId}
            alt="card-image"
          />
        </div>
          <h3 className="font-bold my-2 text-md">{name}</h3>
          <p className="text-sm md:text-lg">{cuisines.join(", ")}</p>
          <p className="text-sm md:text-lg">⭐️ {avgRating}</p>
          <p className="text-sm md:text-lg">⏳ {restoData.info.sla.deliveryTime + " minutes"}</p>
        </Link>
      </div>
    </div>
  );
};

//   export default RestaurantCard;
