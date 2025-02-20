import { NavLink } from "react-router";
import { Nav, NavWrapper, NavLinkLogo, NavLinkLogoText, NavList } from "./Navbar.styled";

import BtnDarkMode from "../Buttons/BtnDarkMode";
import { Container } from "../../main.styled";

const Navbar = () => {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";
  return (
    <Nav>
      <Container>
        <NavWrapper>
          <NavLinkLogo to="/">
            <NavLinkLogoText>Freelancer</NavLinkLogoText> portfolio
          </NavLinkLogo>

          <BtnDarkMode />

          <NavList>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>

            <li >
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li >
              {/* <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contacts
              </NavLink> */}
            </li>
          </NavList>
        </NavWrapper>
      </Container>
    </Nav>
  );
};

export default Navbar;
