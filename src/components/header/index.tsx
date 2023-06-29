import * as Styles from "./styles";

import brandImage from "#assets/brand.png";
import Text from "#components/text";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Styles.Wrapper>
      <Styles.BrandImage src={brandImage} alt={"Brand"} />
      <Text variant="small" color="primary2">Sanjay</Text>
      <Styles.Grow />
      <Styles.ActionText onClick={() => navigate("/")} variant="small" color="primary2">
        Home
      </Styles.ActionText>
      <Styles.ActionText onClick={() => navigate("/about")} variant="small" color="primary2">
        About
      </Styles.ActionText>
      <Styles.ActionText onClick={() => navigate("/projects")} variant="small" color="primary2">
        Projects
      </Styles.ActionText>
    </Styles.Wrapper>
  );
}

export default Header;
