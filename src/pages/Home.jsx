import hero from "../assets/hero-phone.webp";
import "../styles/Home.css";
import { Link } from "react-router";

function Home() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Tomorrow's Tech, Today.</h1>
        <p>Step into the future with devices that redefine performance, design, and innovation.</p>
        <Link to="/shop">
          <button>Shop Now</button>
        </Link>
      </div>
      <img src={hero} alt="Hero" />
    </div>
  );
}

export { Home };
