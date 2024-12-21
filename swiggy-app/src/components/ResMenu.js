import {useParams} from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RatingCard from "./RatingCard";
import Shimmer from "./Shimmer";


const ResMenu = () => {

    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo == null) {
     return <Shimmer/>
    }
    const {name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating, sla, title} = resInfo?.cards[2]?.card?.card?.info
    // console.log(name, cuisines, costForTwoMessage, avgRating, );
    const menus = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0].card.card["@type"] );
    const itemsCatagory = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(ic => ic.card.card["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(itemsCatagory)
    return (
        <div>
            <h1 className="res-name">{name}</h1>
            <div className="rating-bar">

            <RatingCard rating={avgRating} time={sla.slaString}/> 
            <span className="cost-msg"> - {costForTwoMessage} </span>
            </div>
            <h2>{cuisines.join(", ")}</h2>
            <div>
                <h2>Recommended({menus.length})</h2>
                <ul>
                    {menus.map((menu) => (
                        <li key={menu.card.info.id}>
                            <div className="rec-manu">
                                <div>
                                    {menu.card.info.name} • ₹{menu.card.info.defaultPrice/100 || menu.card.info.price/100}
                                </div>
                                <div>
                                    {menu.card.info.ratings.aggregatedRating.rating} - ({menu.card.info.ratings.aggregatedRating.ratingCountV2})
                                </div>
                                <div>
                                    {menu.card.info.description} 
                                </div>
                            </div>
                        </li> 
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ResMenu;