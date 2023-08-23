import * as Styles from "./styles";
import brandImage from "#assets/brand.png";
import Text from "#components/text";
import { useNavigate } from "react-router-dom";
import GithubAccount from "#components/github-account";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import Hamburger from "#components/hamburger";

function Header() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 576px)");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [isMobile]);

  return (
    <Styles.Wrapper>
      <Styles.BrandImage src={brandImage} alt={"Brand"} />
      <Text variant="small" color="primaryDark">Sanjay</Text>
      <Styles.Grow />
      {isMobile
      ? (<Hamburger open={menuOpen} setOpen={setMenuOpen} />)
      : (<><Styles.ActionText onClick={() => navigate("/")} color="primaryDark">
        Home
      </Styles.ActionText>
        <Styles.ActionText onClick={() => navigate("/about")} color="primaryDark">
          About
        </Styles.ActionText>
        <Styles.ActionText onClick={() => navigate("/projects")} color="primaryDark">
          Projects
        </Styles.ActionText>
        <GithubAccount /></>)}
    </Styles.Wrapper>
  );
}

export default Header;
