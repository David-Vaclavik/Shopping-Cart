// in App
// Product from fetch
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

// in App
export interface Data {
  products: Product[];
}

// In CardControls
// Item in Cart
export type CartItem = {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
  total: number;
};

// Outled used in Shop,
export type OutletContext = {
  searchedProduct: Product[] | null;
  data: Data | null;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

// in Header and SearchBar
export type SearchBarProps = {
  setSearchedProduct: React.Dispatch<React.SetStateAction<Product[] | null>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  data: Data | null;
};
