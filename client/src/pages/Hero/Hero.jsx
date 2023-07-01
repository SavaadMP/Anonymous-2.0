import "./Hero.scss";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero_content">
        <div className="hero_text">
          <h1>Send Anonymous Messages With Anyone</h1>
          <p>
            Introducing our revolutionary website, designed to empower you with
            the freedom to express yourself openly and anonymously
          </p>
          <div className="button_group">
            <Link to="/" className="primary-btn">
              Send Message
            </Link>
            <Link to="/" className="secondary-btn">
              Login
            </Link>
          </div>
        </div>
        <div className="hero_image">
          <img src="./hero.png" alt="computer" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
