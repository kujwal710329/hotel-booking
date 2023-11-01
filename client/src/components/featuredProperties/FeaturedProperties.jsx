import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
import { Link } from "react-router-dom";

const FeaturedProperties = () => {
  // const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");
  const { data, loading, error } = useFetch("/hotels");
  console.log(data);
  return (
    <div className="fp">
      {loading ? (
        "loading..."
      ) : (
        <>
          {data.map((item) => (
            <div className="fpItem" key={item._id}>
              <Link to={`/hotels/${item._id}`}>
                <img src={item.photos[0]} alt="" className="fpImg" />
              </Link>
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from {item.cheapestPrice}</span>
              {item.rating && (
                <div className="fpRating">
                  <button>{item.rating}*</button>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
