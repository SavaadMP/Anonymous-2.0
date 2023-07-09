import "./Loader.scss";

const Loader = ({
  icon = "bx bx-wifi-off",
  rotate = false,
  text = "No Internet Connection!! ☹️",
  passage = "OOPS!! Check your internet connection and try again.. ❤️",
}) => {
  return (
    <div className="loader_container">
      <div className={`${rotate ? "rotate image" : "image"}`}>
        <i className={icon} style={{ color: "#4631be" }}></i>
      </div>
      <div className="text">
        <h3>{text}</h3>
        <p>{passage}</p>
      </div>
    </div>
  );
};

export default Loader;
