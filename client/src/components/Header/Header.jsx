import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
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
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">FAQ</Link>
        </li>
      </ul>
      <button className="primary-btn">Get Started</button>
    </header>
  );
}
export default Header;
