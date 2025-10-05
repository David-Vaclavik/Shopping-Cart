import { Link } from "react-router";
import { SearchBar } from "./SearchBar";

function Header({ setSearchedProduct, searchTerm, setSearchTerm, data }) {
  return (
    <header>
      {/* logo will link to HomePage */}
      <Link to="/">
        <h1>Shop Logo</h1>
      </Link>

      {/* <h3>Search Bar</h3> */}
      <SearchBar
        setSearchedProduct={setSearchedProduct}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        data={data}
      />

      <div className="controls">
        {/* Use Link instead of <a> for internal routes */}
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
}

export { Header };
