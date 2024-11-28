import { Fragment } from "react";
import { Outlet } from "react-router";
import { StyledNav, StyledNavLink, StyledNavList, StyledNavLogo, StyledNavMenu, NavBar } from "./navigation.styles";



const Navigation = () => {
    return (
        <Fragment>
            <NavBar>
                <StyledNav>
                    <StyledNavLogo>
                        MINT<i class='bx bxs-bot'></i>
                    </StyledNavLogo>
                    <StyledNavMenu>
                        <StyledNavList>
                            <li class="nav__item">
                                <StyledNavLink>
                                    <i class='bx bx-home-alt-2'></i>
                                    <span>Home</span>
                                </StyledNavLink>
                            </li>

                            <li class="nav__item">
                                <StyledNavLink>
                                    <i class='bx bx-plus-medical'></i>
                                    <span>What we do</span>
                                </StyledNavLink>
                            </li>

                            <li class="nav__item">
                                <StyledNavLink>
                                    <i class='bx bxs-bot'></i>
                                    <span>Services</span>
                                </StyledNavLink>
                            </li>

                            <li class="nav__item">
                                <StyledNavLink>
                                    <i class='bx bxs-phone-call'></i>
                                    <span>Contact</span>
                                </StyledNavLink>
                            </li>
                            {/* {if user == null} */}
                            {/* <li class="nav__item">
                                    <a href="#" class="button nav_button">
                                        Login
                                    </a>
                                </li> */}
                            {/* {% else %} */}
                            {/* <li class="nav__item">
                                    <p class="welcome-user">Welcome, {{ user }}</p>
                                </li> */}
                        </StyledNavList>
                    </StyledNavMenu>
                    {/* {% if user != null%} */}
                    {/* <a href="/logout" class="button nav__button">
                            Logout
                        </a> */}
                    {/* {% endif %} */}
                    {/* <i class='bx bx-moon change-theme' id="theme-button"></i> */}
                </StyledNav>
            </NavBar>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;