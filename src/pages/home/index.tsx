import Header from "#components/header";
import About from "#components/about";
import Contact from "#components/contact";
import Featured from "#components/featured";
import Footer from "#components/footer";
import * as GlobalStyles from "../global-styles";

export default function HomePage() {
  return (
    <>
      <Header />
      <GlobalStyles.Scrollable>
        <GlobalStyles.Main>
          <About />
          <Featured />
          <Contact />
        </GlobalStyles.Main>
        <Footer />
      </GlobalStyles.Scrollable>
    </>
  );
}
