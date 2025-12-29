// import hero from "../assets/hero-phone.webp";
import heroSketch from "../assets/hero-sketch.webp";
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
      <img src={heroSketch} alt="Hero" loading="eager" />
    </div>
  );
}

export { Home };
