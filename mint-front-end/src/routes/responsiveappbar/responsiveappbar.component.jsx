import { Fragment, useContext, useState } from "react";
import { Outlet } from "react-router";
import AppBar from "@mui/material/AppBar"
import { Tab, Tabs, Toolbar, Typography, Box } from "@mui/material";
import 'boxicons';
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router";
import { useTranslation } from 'react-i18next';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MINTBrandLogo from "../../asset/Mint Brand.png"

const ResponsiveNavBar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [showProducts, setShowProducts] = useState(false)
    const [showServices, setShowServices] = useState(false)
    const [showNewsroom, setShowNewsroom] = useState(false)

    if (currentUser === null) {
        navigate("/auth/login");
    }

    const logout = () => {
        setCurrentUser(null);
    }

    const toggleProductsMenu = () => {
        setShowProducts(!showProducts)
    }
    const toggleServicesMenu = () => {
        setShowServices(!showServices)
    }
    const toggleNewsroom = () => {
        setShowNewsroom(!showNewsroom)
    }
    return (
        <Fragment>
            {showProducts && <div className="drop-menu" style={{
                width: "35vh",
                position: "absolute",
                zIndex: "10",
                background: "white",
                left: "20rem",
                top: "5rem",
                borderRadius: "20px",
            }}>
                <ul className="menu-list" style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1rem",
                    padding: "20px",
                    listStyle: "none",
                    textAlign: "center",
                }}>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="#">MINT IP</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="http://localhost:5173/" rel="noreferrer" target="_blank">MINT Patent AI</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="#" rel="noreferrer" target="_blank">MINT IRM</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="sp\members-page.html" rel="noreferrer" target="_blank">MINT Business Page</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="http://localhost:3003/login" rel="noreferrer" target="_blank">MINT Grants</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="http://127.0.0.1:5005" rel="noreferrer" target="_blank">MINT Funding</a></li>
                </ul>
            </div>}

            {showServices && <div className="drop-menu" style={{
                width: "35vh",
                position: "absolute",
                zIndex: "10",
                background: "white",
                left: "28rem",
                top: "5rem",
                borderRadius: "20px",
            }}>
                <ul className="menu-list" style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1rem",
                    padding: "20px",
                    listStyle: "none",
                    textAlign: "center",
                }}>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="http://10.1.145.2:3002">Mentorship</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="https://hloap.com/postfund">Post Funding Support</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="https://hloap.com/partners">Service Partners</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="https://hloap.com/ip-assist">IPR File Assist</a></li>
                </ul>
            </div>}



            {showNewsroom && <div className="drop-menu" style={{
                width: "35vh",
                position: "absolute",
                zIndex: "10",
                background: "white",
                left: "44rem",
                top: "5rem",
                borderRadius: "20px",
            }}>
                <ul className="menu-list" style={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: "1rem",
                    padding: "20px",
                    listStyle: "none",
                    textAlign: "center",
                }}>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="https://hloap.com/media-coverage">Media Coverage</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="https://hloap.com/press-release">Press Release</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="https://hloap.com/blog">Blog</a></li>
                    <li style={{ borderBottom: "1px solid black" }}><a style={{ padding: "5px", color: "black", textDecoration: "none" }} href="https://hloap.com/ceo">Letter From CEO</a></li>
                </ul>
            </div>}


            <AppBar sx={{
                backgroundColor: "white",
                color: "black",
                boxShadow: " box-shadow: 0 8px 24px hsla(228, 66%, 45%, .15)",
                transition: "background-color 0.3s ease, color 0.3s ease",
                fontFamily: "Poppins"
            }}>
                <Box>
                    <Toolbar sx={{ zIndex: '1' }}>
                        <img src={MINTBrandLogo} alt="" srcset="" style={{
                            width: "130px",
                            height: "65px",
                            cursor: "pointer"
                        }} onClick={() => window.location.href = "https://hloap.com"} />


                        <Tabs sx={{ marginLeft: 'auto' }} textColor="#fff">
                            <Tab
                                label={
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        Products <ArrowDropDownIcon style={{ marginLeft: '5px', marginTop: "-3px" }} />
                                    </span>
                                }
                                onClick={toggleProductsMenu}

                            ></Tab>
                            <Tab label={
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    Services <ArrowDropDownIcon style={{ marginLeft: '5px', marginTop: "-3px" }} />
                                </span>
                            }
                                onClick={toggleServicesMenu} ></Tab>
                            <Tab label={"Mint Next"} onClick={() => window.location.href = "https://hloap.com/next"} ></Tab>
                            <Tab label={
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    Newsroom <ArrowDropDownIcon style={{ marginLeft: '5px', marginTop: "-3px" }} />
                                </span>
                            }
                                onClick={toggleNewsroom} ></Tab>
                            <Tab label={"MINT Careers"} onClick={() => window.location.href = "https://hloap.com/careers"} ></Tab>
                            <Tab label={"MINT Governance"} onClick={() => window.location.href = "https://governance.hloap.com"} ></Tab>
                            {
                                currentUser && <Typography sx={{ marginTop: '.7rem' }}>Welcome {currentUser.username}!</Typography>
                            }
                            {
                                currentUser !== null ?
                                    <Tab onClick={logout} label={t(`menu.logout`, { returnObjects: true })}></Tab>
                                    :
                                    <Tab label="Login"></Tab>
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