import instagram from "../../img/icons/instagram.svg";
// import twitter from "../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";
import {
  FooterSection,
  FooterWrapper,
  FooterSocialList,
  Copyright, FooterSocialItem
} from "./Footer.styled";
import { Container } from "../../main.styled";


const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <FooterSocialList>
            <FooterSocialItem >
              <a href="https://www.instagram.com/inna_kukla/#">
                <img src={instagram} alt="Link" />
              </a>
            </FooterSocialItem>
            {/* <li >
              <a href="#!">
                <img src={twitter} alt="Link" />
              </a>
            </li> */}
            <FooterSocialItem>
              <a href="https://github.com/InnaKukla">
                <img src={gitHub} alt="Link" />
              </a>
            </FooterSocialItem>
            <FooterSocialItem>
              <a href="https://www.linkedin.com/in/inna-kukla-719476277/">
                <img src={linkedIn} alt="Link" />
              </a>
            </FooterSocialItem>
          </FooterSocialList>
          <Copyright>
            <p>© 2025</p>
          </Copyright>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
