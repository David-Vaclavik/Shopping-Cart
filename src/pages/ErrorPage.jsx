import { useRouteError, Link } from "react-router";
import "../styles/ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  console.log("End of ErrorPage rendering");

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button>Go back to Home</button>
      </Link>
    </div>
  );
}

export { ErrorPage };
