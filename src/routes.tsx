import App from "./App";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Cart } from "./pages/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // ← Add this for root-level errors
    children: [
      {
        index: true,
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
      {
        path: "*", // ← Catch-all for 404 errors
        element: <ErrorPage />,
      },
    ],
  },
];

export default routes;
