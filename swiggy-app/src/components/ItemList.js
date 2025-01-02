import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div className="items-list">
      <ul>
        {items.map((item) => (
          <li key={item.card.info.id}>
            <div className="list-card">
              <div>
                <div>
                  <div className="itm-heading">{item.card.info.name}</div>
                  <div className="itm-price">
                    ₹
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}
                  </div>
                </div>
                <div className="itm-rating">
                  {item.card.info.ratings.aggregatedRating.rating ? (
                    ` ★ ${item.card.info.ratings.aggregatedRating.rating} - (${item.card.info.ratings.aggregatedRating.ratingCountV2})`
                  ) : (
                    <div></div>
                  )}
                </div>
                <p className="itm-desc">{item.card.info.description}</p>
              </div>
              <div>
                <div className="add-btn ">
                  <button> Add+</button>
                </div>
                {item.card.info.imageId && (
                  <img
                    className="itm-img"
                    src={CDN_URL + item.card.info.imageId}
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
