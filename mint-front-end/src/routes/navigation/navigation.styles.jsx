import styled from "styled-components";

export const NavBar = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    background-color: transparent;
    z-index: var(--z-fixed);
    transition: 4s;
    transition-delay: 0.5s;
`

export const StyledNav = styled.nav`
    height: 100vh
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: .7rem;
    max-width: 80%;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`

export const StyledNavLogo = styled.a`
    color: #fff;
    display: inline-flex;
    align-items: center;
    column-gap: .25rem;
    font-weight: var(--font-medium);
    transition: .3s;
    transition-delay: 0.5s;
    & > i {
        font-size: 1rem;
    }
    &:hover {
        color: var(--first-color);
    }
`

export const StyledNavMenu = styled.div`
    position: fixed;
    background-color: var(--container-color);
    box-shadow: 0 8px 24px hsla(228, 66%, 45%, .15);
    width: 90%;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 1.30rem 3rem;
    border-radius: 1.25rem;
    transition: 4s;
    transition-delay: 0.5s;
`

export const StyledNavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const StyledNavLink = styled.a`
    color: var(--text-color);
    display: flex;
    padding: .5rem;
    border-radius: 50%;
`

export const StyledNavButton = styled.button`
    display: inline-block;
    background: linear-gradient(101deg, hsl(228, 66%, 53%), hsl(228, 66%, 47%));
    color: #fff;
    padding: 14px 28px;
    border-radius: .5rem;
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    box-shadow: 0 4px 8px hsla(228, 66%, 45%, .25);
    transition: 1s;
    transition-delay: 0.5s;
    cursor: pointer;
`

