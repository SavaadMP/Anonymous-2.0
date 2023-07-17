import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogout } from "../../hooks/useLogout";

function Header() {
  const { logout } = useLogout();
  const { user } = useSelector((state) => state.user);

  function logoutAcc() {
    logout();
  }

  return (
    <header>
      <Link className="logo" to="/">
        <h2>🎭 Anonymous</h2>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
      </ul>
      {!user ? (
        <button className="primary-btn">
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            Get Started
          </Link>
        </button>
      ) : (
        <button onClick={logoutAcc} className="primary-btn">
          Log Out
        </button>
      )}
    </header>
  );
}
export default Header;
