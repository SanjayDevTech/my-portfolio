import * as Styles from "./styles";

import brandImage from "#assets/brand.png";
import Text from "#components/text";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <Styles.Wrapper>
      <Styles.BrandImage src={brandImage} alt={"Brand"} />
      <Styles.Grow />
      <Text onClick={() => navigate("/")} variant="small" color="primary1">
        Home
      </Text>
      <Link to={"/about"}>About</Link>
      <Link to={"/projects"}>Projects</Link>
    </Styles.Wrapper>
  );
}

export default Header;
