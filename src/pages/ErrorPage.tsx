import { useRouteError, Link, isRouteErrorResponse } from "react-router";
import "../styles/ErrorPage.css";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  console.log("End of ErrorPage rendering");

  const getErrorMessage = (error: unknown) => {
    if (isRouteErrorResponse(error)) {
      return error.statusText || error.data?.message || "Unknown error";
    } else if (error instanceof Error) {
      return error.message;
    } else if (typeof error === "string") {
      return error;
    } else {
      return "Unknown error";
    }
  };

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* <i>{error.statusText || error.message}</i> */}
        <i>{getErrorMessage(error)}</i>
      </p>
      <Link to="/">
        <button>Go back to Home</button>
      </Link>
    </div>
  );
}

export { ErrorPage };
