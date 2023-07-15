import * as Styles from "./styles";

import brandImage from "#assets/brand.png";
import Text from "#components/text";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Styles.Wrapper>
      <Styles.BrandImage src={brandImage} alt={"Brand"} />
      <Text variant="small" color="primaryDark">Sanjay</Text>
      <Styles.Grow />
      <Styles.ActionText onClick={() => navigate("/")} color="primaryDark">
        Home
      </Styles.ActionText>
      <Styles.ActionText onClick={() => navigate("/about")} color="primaryDark">
        About
      </Styles.ActionText>
      <Styles.ActionText onClick={() => navigate("/projects")} color="primaryDark">
        Projects
      </Styles.ActionText>
    </Styles.Wrapper>
  );
}

export default Header;
