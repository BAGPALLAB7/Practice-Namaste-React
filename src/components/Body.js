import { RestaurantCard } from "./RestaurantCard";
import { restoList } from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import FetchError from "./FetchError";

const Body = () => {
  //console.log("Body component rendered.");
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredSearchData, setFilteredSearchedData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const filterResto = () => {
    const filteredList = filteredSearchData.filter((resto) => {
      return resto.info.avgRating >= 4.4;
    });
    //console.log(filteredList);
    setFilteredSearchedData(filteredList);
  };
  const fetchAPI = async () => {
    // const fetchedData = await fetch(
    //   "https://corsproxy.io/?"+encodeURIComponent("/https://www.swiggy.com/api/seo/getListing?lat=22.69048851118229&lng=88.39274636162034")
    // );
    const fetchedData = await fetch(
      'https://corsproxy.org/?'+encodeURIComponent('https://www.swiggy.com/api/seo/getListing?lat=22.69048851118229&lng=88.39274636162034')
    );

    const jsonData = await fetchedData.json();
    console.log(jsonData);
    setRestaurantList(
      jsonData?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredSearchedData(
      jsonData?.data?.success?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  // console.log(restaurantList);

  const changeHandeler = (e) => {
    setSearchData(e.target.value);
  };
  const searchRestro = (searchData) => {
    const searchedRestroList = restaurantList.filter((data) => {
      return (
        data.info.cuisines
          .join(" ")
          .toLowerCase()
          .includes(searchData.toLowerCase()) ||
        data.info.name.toLowerCase().includes(searchData.toLowerCase())
      );
    });
    setFilteredSearchedData(searchedRestroList);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (restaurantList.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex py-4">
        <input
          type="text"
          className="border-2 border-blue-300 w-64 rounded-s-md ms-4"
          placeholder="chinese, pizza or restaurant name"
          onChange={(e) => changeHandeler(e)}
        />
        <button
          className="bg-blue-300 w-32 rounded-e-md"
          onClick={() => searchRestro(searchData)}
        >
          Search
        </button>
        <button
          className="bg-blue-300 mx-4 w-40 rounded-md"
          onClick={() => filterResto()}
        >
          Filer Restaurants
        </button>
      </div>
      <div className="flex flex-wrap mx-4">
        {filteredSearchData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restoData={restaurant} />
        ))}
        {/* <RestaurantCard restoData={restoList[0]} />
          <RestaurantCard restoData={restoList[1]} />
          <RestaurantCard restoData={restoList[2]} />
          <RestaurantCard restoData={restoList[3]} />
          <RestaurantCard restoData={restoList[4]} />
          <RestaurantCard restoData={restoList[5]} /> */}
      </div>
    </div>
  );
};

export default Body;
