import { CDN_URL } from "../utils/constants";
import { Link } from "react-router";
import RatingCard from "./RatingCard";
const RestaurantCard = (props) => {
  console.log(props);
  const { name, cuisines, cloudinaryImageId, avgRatingString, sla, id } =
    props.resData.info;
    
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <Link to={"/restaurant/"+id}><h3>{name}</h3></Link>
      <h4>{cuisines.join(", ")}</h4>
        <RatingCard rating={avgRatingString} time={sla.slaString} />
    </div>
  );
};
export const withDiscount = (RestaurantCard) => {
  return (props) => {
    const {header, subHeader} = props.resData.info.aggregatedDiscountInfoV3
    return (
      <div>
        <label className="dis-lbl">{header +" "+ subHeader}</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}



export default RestaurantCard;
