import "../styles/Footer.css";
import logo from "../assets/logo.svg";
import { Mail, Phone, Github, MessageCircle } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <img className="footer-logo" src={logo} alt="Shop Logo" />
        {/* <p>&copy; 2023 Your Company. All rights reserved.</p> */}
        <p>
          This is not a real store. This is the front-end of a hypothetical E-commerce app built in
          React for demonstration purposes only. Find the repository on{" "}
          <a
            href="https://github.com/David-Vaclavik/Shopping-Cart"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>

      <div className="footer-links">
        <h2>Useful Links</h2>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
        <a href="https://logoipsum.com/" target="_blank" rel="noopener noreferrer">
          Logoipsum
        </a>
        <a href="https://dummyjson.com/" target="_blank" rel="noopener noreferrer">
          DummyJSON
        </a>
      </div>

      <div className="footer-contact">
        <h2>Contact Us</h2>
        {/* <Mail /> */}
        <p>
          <Mail /> support@digitronix.com
        </p>
        <p>
          <Phone />
          +1 (123) 456-7890
        </p>
        <p>
          <MessageCircle />
          chat support
        </p>
        <p>
          <Github />
          <a href="https://github.com/David-Vaclavik" target="_blank" rel="noopener noreferrer">
            GitHub - David Václavík
          </a>
        </p>
      </div>
    </footer>
  );
}

export { Footer };
