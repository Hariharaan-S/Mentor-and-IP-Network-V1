import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router";
import AppBar from "@mui/material/AppBar"
import { Tab, Tabs, Toolbar, Typography, Box } from "@mui/material";
import 'boxicons';


const ResponsiveNavBar = () => {
    const [isScrolled, setIsScrolled] = useState();

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
                            <Tab label="Home"></Tab>
                            <Tab label="What we do"></Tab>
                            <Tab label="Services"></Tab>
                            <Tab label="Contact"></Tab>
                            <Typography sx={{ marginTop: '.7rem' }}>Welcome User!</Typography>
                            <Tab label="Login"></Tab>
                            <Tab label="Logout"></Tab>
                        </Tabs>
                    </Toolbar>
                </Box>

            </AppBar>
            <Outlet />
        </Fragment >

    )
}

export default ResponsiveNavBar;