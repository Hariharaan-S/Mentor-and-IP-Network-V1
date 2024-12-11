import { Fragment, useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import AppBar from "@mui/material/AppBar"
import { Tab, Tabs, Toolbar, Typography, Box } from "@mui/material";
import 'boxicons';
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';

const ResponsiveNavBar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [isScrolled, setIsScrolled] = useState();

    if (currentUser === null) {
        navigate("/auth/login");
    }

    const logout = () => {
        setCurrentUser(null);
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
    }, []);
    return (
        <Fragment>
            <AppBar sx={{
                backgroundColor: isScrolled ? "white" : "transparent",
                color: isScrolled ? "black" : "white",
                paddingTop: 1,
                paddingLeft: 17,
                paddingRight: 17,
                boxShadow: isScrolled ? " box-shadow: 0 8px 24px hsla(228, 66%, 45%, .15)" : 0,
                transition: "background-color 0.3s ease, color 0.3s ease",
                fontFamily: "Poppins"
            }}>
                <Box>
                    <Toolbar sx={{ zIndex: '1' }}>
                        <Typography>MINT</Typography>
                        <Typography><i class='bx bxs-bot'></i></Typography>
                        <Tabs sx={{ marginLeft: 'auto' }} textColor="#fff">
                            <Tab label={t(`menu.Home`, { returnObjects: true })} ></Tab>
                            <Tab label={t(`menu.What_we_do`, { returnObjects: true })}></Tab>
                            <Tab label={t(`menu.Services`, { returnObjects: true })}></Tab>
                            <Tab label={t(`menu.Contact`, { returnObjects: true })}></Tab>
                            {
                                currentUser && <Typography sx={{ marginTop: '.7rem' }}>Welcome {currentUser.username}!</Typography>

                            }
                            {
                                currentUser !== null ? <Tab onClick={logout} label={t(`menu.logout`, { returnObjects: true })}></Tab> : <Tab label="Login"></Tab>
                            }
                        </Tabs>
                    </Toolbar>
                </Box>
            </AppBar>
            <Outlet />
        </Fragment >

    )
}

export default ResponsiveNavBar;