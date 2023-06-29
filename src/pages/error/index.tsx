import { useRouteError } from "react-router-dom";

import * as Styles from "./styles";

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <Styles.Wrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status} {error.statusText || error.message}</i>
      </p>
    </Styles.Wrapper>
  );
}