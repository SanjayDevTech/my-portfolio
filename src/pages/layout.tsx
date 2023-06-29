import * as GlobalStyles from "./global-styles";
import Header from "#components/header";
import Footer from "#components/footer";
import { Outlet } from "react-router-dom";

export default function Layout() {

  return (
    <>
      <Header />
      <GlobalStyles.Scrollable>
        <GlobalStyles.Main>
            <Outlet />
        </GlobalStyles.Main>
        <Footer />
      </GlobalStyles.Scrollable>
    </>
  );
}
