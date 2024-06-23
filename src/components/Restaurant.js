import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { restaurantList } from "../utils/Data/StaticResturantList";
import SkeletonComponent from "./MUI skeleton/SkeletonComponent";

const Restaurant = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [showIndex, setShowIndex] = useState(null);
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const [fetchedJsonData, setfetchedJsonData] = useState(null);

  const fetchRestaurant = async () => {
    let finalUrl = MENU_URL + id;
    // const fetchData = await fetch('https://corsproxy.org/?'+encodeURIComponent(finalUrl));
    try {
      const fetchData = await fetch(finalUrl);
      const jsonData = await fetchData.json();
      setfetchedJsonData(jsonData);
    } catch {
      console.log("restaurant id", id);
      console.log("fetch data from local data", restaurantList[id]);
      setfetchedJsonData(restaurantList[id]);
    }
  };
  useEffect(() => {
    if (window.innerWidth >= 780) {
      const allItem =
        (fetchedJsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
          (item) =>
            item.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setItem(allItem);

      setRestaurantData(fetchedJsonData?.data?.cards[2]?.card?.card?.info);
    } else {
      const allItem =
        (fetchedJsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
          (item) =>
            item.card?.card?.["@type"] ==
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      setItem(allItem);

      setRestaurantData(fetchedJsonData?.data?.cards[2]?.card?.card?.info);
    }
  }, [fetchedJsonData, item]);

  console.log(window.innerWidth);

  useEffect(() => {
    fetchRestaurant();
  }, []);

  console.log("inside restaurant allitem - :" + item);
  console.log("inside restaurant restaurantData - :" + restaurantData);

  if (restaurantData == null) {
    return <SkeletonComponent />;
  }
  return (
    <>
      <div className=" bg-slate-200 w-11/12 md:w-7/12 mx-auto my-6 p-4 rounded-md">
        <h1 className="font-bold text-lg md:text-4xl">{restaurantData.name}</h1>
        <div className="flex justify-between items-center content-center">
          <h2>{restaurantData.cuisines.join(", ")}</h2>
          <h2>⭐️{restaurantData.avgRating} </h2>
        </div>
      </div>

      {item.map((i, index) => (
        <RestaurantCategory
          category={i}
          key={i.card.card.title}
          categoryIndex={index}
          showIndex={showIndex}
          setShowIndex={setShowIndex}
        />
      ))}
    </>
  );
};
export default Restaurant;
