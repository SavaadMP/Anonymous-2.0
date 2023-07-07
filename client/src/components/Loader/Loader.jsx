import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader_container">
      <div className="image">
        <i className="bx bxs-hourglass" style={{ color: "#4631be" }}></i>
      </div>
      <div className="text">
        <p>Loading Resources..</p>
      </div>
    </div>
  );
};

export default Loader;
