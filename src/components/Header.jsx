import { Link } from "react-router";
import { SearchBar } from "./SearchBar";
// import logo from "../assets/logo.svg";
import logo36 from "../assets/logo36.svg";
import { ShoppingCart, Store } from "lucide-react";

function Header({ setSearchedProduct, searchTerm, setSearchTerm, data }) {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={logo36} alt="Shop Logo" />
      </Link>

      <SearchBar
        setSearchedProduct={setSearchedProduct}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
      />

      <div className="controls">
        <Link to="/shop">
          {/* <Store color="#2b457d" size={36} /> */}
          <Store size={36} />
        </Link>
        <Link to="/cart">
          {/* Cart Icon */}
          <ShoppingCart size={36} />
        </Link>
      </div>
    </header>
  );
}

export { Header };
