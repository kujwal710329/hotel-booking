import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=delhi,mumbai,surat,london");

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <Link to="/hotels">
            <div className="featuredItem">
              <img src="https://marathon.in/wp-content/uploads/2022/05/blog_header-07-scaled.jpg" alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>
          </Link>
          <div className="featuredItem">
            <img
              src="https://i1.wp.com/buddybits.com/wp-content/uploads/2016/01/10-Reasons-Why-Surat-is-the-Best-City-to-Live-In.jpg?fit=630%2C400&ssl=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>surat</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="https://www.dwih-newdelhi.org/files/2019/05/iStock-474239634_1600x907.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
              <h1>delhi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
