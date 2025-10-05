import App from "./App";
//TODO: Create an ErrorPage
// import ErrorPage from "./ErrorPage";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";

// path must match with Link to

const routes = [
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];

export default routes;
