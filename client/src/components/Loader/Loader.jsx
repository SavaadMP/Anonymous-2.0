import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="image">
        <i className="bx bx-wifi-off" style={{ color: "#4631be" }}></i>
      </div>
      <div className="text">
        <h3>No Internet Connection!! ☹️</h3>
        <p>OOPS!! Check your internet connection and try again.. ❤️</p>
      </div>
    </div>
  );
};

export default Loader;
