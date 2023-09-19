import * as Styles from "./styles";
import brandImage from "#assets/brand.png";
import Text from "#components/text";
import { useNavigate } from "react-router-dom";
import GithubAccount from "#components/github-account";
import { useMediaQuery } from "usehooks-ts";
import { useEffect, useState } from "react";
import Hamburger from "#components/hamburger";
import pagesConfig from "#config/pages";
import { useMobile } from "#utils";

function Header() {
  const navigate = useNavigate();
  const isMobile = useMobile();
  const [menuOpen, setMenuOpen] = useState(false);

  const pages = pagesConfig;

  useEffect(() => {
    setMenuOpen(false);
  }, [isMobile]);

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.BrandImage src={brandImage} alt={"Brand"} />
        <Text variant="small" color="primaryDark">Sanjay</Text>
        <Styles.Grow />
        {isMobile
          ? (<Hamburger open={menuOpen} setOpen={setMenuOpen} />)
          : (<>
            {pages.map((page) => (
              <Styles.ActionText key={page.path} onClick={() => navigate(page.path)} color="primaryDark">
                {page.title}
              </Styles.ActionText>
            ))}
            <GithubAccount /></>)}
      </Styles.Wrapper>
      {isMobile && menuOpen && (
        <Styles.MobileMenu>
          {pages.map((page) => (
            <Styles.MobileMenuItem key={page.path} onClick={() => navigate(page.path)} color="primaryDark">
              {page.title}
            </Styles.MobileMenuItem>
          ))}
          <GithubAccount />
        </Styles.MobileMenu>
      )}
    </Styles.Container>
  );
}

export default Header;
