import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data , showItems, setIndex}) => {
    // console.log(data);
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setIndex();
  }
  return (
    <div>
      <div className="res-cat-title">
        <div className="res-cat" onClick={handleClick}>
          <div>
            <h2>
              {data.title}({data.itemCards.length})
            </h2>
          </div>
          <div>⬇️</div>
        </div>
       {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
