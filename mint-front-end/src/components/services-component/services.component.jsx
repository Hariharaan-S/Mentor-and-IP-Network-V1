import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Grid2, Typography } from "@mui/material";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ServiceImage from "../../asset/indexservices.jpg"
import { ImageOverlay, StyledImage, StyledServices } from "./services.styles";
import { FeatureSubTitle, FeatureTitle } from "../features/features.styles";

const Services = () => {
    return (
        <StyledServices>
            <Grid2 sx={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: "4rem",
                paddingRight: "4rem"
            }}>
                <Grid2 sx={{
                    margin: "auto",
                    paddingLeft: "4rem",
                    paddingRight: "4rem",
                    paddingTop: "4rem",
                    paddingBottom: "4rem"
                }}>
                    <ImageOverlay></ImageOverlay>
                    <StyledImage>
                        <img src={ServiceImage} alt="" />
                    </StyledImage>
                </Grid2>
                <Grid2 sx={{
                    width: "45%",
                    marginLeft: "2rem"
                }}>
                    <Grid2 sx={{ width: "80%" }}>
                        <FeatureSubTitle>Our Services</FeatureSubTitle>
                        <FeatureTitle>
                            Value We Provide to Innovators<span>.</span>
                        </FeatureTitle>
                    </Grid2>
                    <p class="value__description" style={{
                        fontSize: "1rem",
                        marginBottom: "2rem",
                        width: "90%",
                        fontFamily: 'Poppins, sans-serif'
                    }}>
                        Streamline your IPR management, collaborate with mentors and investors, and accelerate your
                        startup's growth with our all-in-one platform, designed to provide insights, funding
                        opportunities, and seamless patent tracking.
                    </p>
                    <Grid2 sx={{ width: "92%" }}>
                        <Accordion sx={{
                            padding: 2,
                            borderRadius: "10px",
                            marginBottom: "1rem"
                        }}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                id="panel-1-header"
                            >
                                <i class='bx bxs-shield-x value__accordion-icon' style={{
                                    backgroundColor: " hsl(228, 100%, 97%)",
                                    padding: "5px",
                                    borderRadius: ".25rem",
                                    fontSize: "18px",
                                    color: "hsl(228, 66%, 53%)",
                                    marginRight: ".75rem",
                                    transition: "0.7s"
                                }}></i>
                                <Typography>Manage Your IPRs</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Track and protect your IPRs, patents with our integrated management system.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            padding: 2,
                            borderRadius: "10px",
                            marginBottom: "1rem"
                        }}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                id="panel-1-header"
                            >
                                <i class='bx bxs-x-square value__accordion-icon' style={{
                                    backgroundColor: " hsl(228, 100%, 97%)",
                                    padding: "5px",
                                    borderRadius: ".25rem",
                                    fontSize: "18px",
                                    color: "hsl(228, 66%, 53%)",
                                    marginRight: ".75rem",
                                    transition: "0.7s"
                                }}></i>
                                <Typography> AI-Powered Analytics</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ borderRadius: "10px" }}>
                                <Typography>AI-driven insights to help you identify opportunities and protect your ideas.</Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{
                            padding: 2,
                            borderRadius: "10px",
                            marginBottom: "1rem"
                        }}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                id="panel-1-header"
                            >
                                <i class='bx bxs-bar-chart-square value__accordion-icon' style={{
                                    backgroundColor: " hsl(228, 100%, 97%)",
                                    padding: "5px",
                                    borderRadius: ".25rem",
                                    fontSize: "18px",
                                    color: "hsl(228, 66%, 53%)",
                                    marginRight: ".75rem",
                                    transition: "0.7s"
                                }}></i>
                                <Typography>Find mentors</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Connect with investors and government agencies to take your research or startup to
                                    the next level.</Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid2>
                </Grid2>
            </Grid2>
        </StyledServices >
    )
}

export default Services;