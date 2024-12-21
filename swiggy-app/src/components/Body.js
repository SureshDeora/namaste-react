import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import SampleUi from "./Sample";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withDiscount } from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");
  const DiscountResCard = withDiscount(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API_URL);
      const json = await data.json();
      // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setListOfRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilterList(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleOnClick = () => {
    const filteredlist = listOfRestaurants.filter((res) => {
      return res.info.avgRating > 4;
    });
    setFilterList(filteredlist);
  };

  const handleOnChange = (e) => {
    setSearchTxt(e.target.value);
  };

  const onlineStatus = useOnlineStatus();
  if(!onlineStatus) {
    return <h1>
      Looks like you're offline!! Please check your internet connection....
    </h1>
  }


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <input
        type="text"
        className="input-box"
        value={searchTxt}
        onChange={handleOnChange}
      />
      <button
        className="filter-btn"
        onClick={() => {
          const newList = listOfRestaurants.filter((res) =>
            res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
          );
          setFilterList(newList);
          // console.log(newList);
        }}
      >
        Search
      </button>
      <button className="filter-btn" onClick={handleOnClick}>
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {filterList.map((restaurant) => (
          <>
          {restaurant.info.aggregatedDiscountInfoV2 ? <RestaurantCard key={restaurant.info.id} resData={restaurant} /> : <DiscountResCard resData={restaurant} />}
          
          {/* {console.log(restaurant.info.aggregatedDiscountInfoV2)} */}
          </>
        ))}
      </div>
      <div className="res-container">
        {filterList.map((restaurant) => (
          <SampleUi key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
