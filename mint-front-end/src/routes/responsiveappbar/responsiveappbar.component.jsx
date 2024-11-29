import { Fragment } from "react";
import { Outlet } from "react-router";
import AppBar from "@mui/material/AppBar"
import { Tab, Tabs, Toolbar, Typography, Box } from "@mui/material";
import 'boxicons';


const ResponsiveNavBar = () => {
    return (
        <Fragment>
            <AppBar sx={{ backgroundColor: 'transparent', paddingTop: 1, paddingLeft: 17, paddingRight: 17, boxShadow: 0 }}>
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