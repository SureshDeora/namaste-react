import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RatingCard from "./RatingCard";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ResMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState();
  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage, avgRating, sla } =
    resInfo?.cards[2]?.card?.card?.info;

  // const menus = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

  const itemsCatagories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (ic) =>
        ic.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //   console.log(itemsCatagories)

  return (
    <div className="res-manu">
      <h1 className="res-name">{name}</h1>
      <div className="rating-bar">
        <RatingCard rating={avgRating} time={sla.slaString} />
        <span className="cost-msg"> {costForTwoMessage} </span>
      </div>
      <h2>{cuisines.join(", ")}</h2>
      {itemsCatagories.map((ic, index) => {
        // console.log(ic?.card?.card?.title)
        return ( 
          <RestaurantCategory
            key={ic?.card?.card?.title}
            data={ic?.card?.card}
            showItems={index == showIndex? true : false}
            setIndex={() => setShowIndex((prevIndex) => (prevIndex === index ? null : index))}
          />
        );
      })}
    </div>
  );
};
export default ResMenu;
