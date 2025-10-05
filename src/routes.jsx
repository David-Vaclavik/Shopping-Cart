import App from "./App";
//TODO: Create an ErrorPage
// import ErrorPage from "./ErrorPage";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";

// path must match with Link to

const routes = [
  {
    path: "/",
    element: <App />, // App is the wrapper with Header
    children: [
      {
        index: true, // Home is the default route
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];

export default routes;
