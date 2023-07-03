import { Link } from "react-router-dom";
import "./PageNotFound.scss";

function PageNotFound() {
  return (
    <section className="empty_page">
      <div className="empty_page_container">
        <div className="page_content">
          <h4>404 Error!!..</h4>
          <h1>Page Not Found!!</h1>
          <p>
            Sorry, the page you are looking for doesn't exist or has been
            moved.. Try something else.. 🙃
          </p>
          <Link to="/" className="primary-btn">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default PageNotFound;
