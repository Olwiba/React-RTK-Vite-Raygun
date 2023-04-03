import { useRouteError } from "react-router-dom";

function ErrorPage() {
  // react-router-dom doesn't offer type support for useRouteError
  const error: any = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export { ErrorPage };