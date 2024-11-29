import React from "react";
import { Grid2 } from "@mui/material";
import ServiceImage from "../../asset/indexservices.jpg"
import { AccordionArrow, AccordionContent, AccordionDescription, AccordionHeader, AccordionItem, ImageOverlay, StyledImage, StyledServices } from "./services.styles";
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
                        <AccordionItem>
                            <AccordionHeader>
                                <i class='bx bxs-shield-x value__accordion-icon' style={{
                                    backgroundColor: "hsl(228, 100%, 97%)",
                                    padding: "5px",
                                    borderRadius: ".25rem",
                                    fontSize: "18px",
                                    color: " hsl(228, 66%, 53%)",
                                    marginRight: ".75rem",
                                    transition: "0.7s"
                                }}></i>
                                <h3 class="value__accordion-title">
                                    Manage Your IPRs
                                </h3>
                                <AccordionArrow>
                                    <i class='bx bxs-down-arrow' style={{
                                        backgroundColor: "hsl(228, 100%, 97%)",
                                        padding: "5px",
                                        borderRadius: ".25rem",
                                        fontSize: "18px",
                                        color: " hsl(228, 66%, 53%)",
                                        marginRight: ".75rem",
                                        transition: "0.7s"
                                    }}></i>
                                </AccordionArrow>
                            </AccordionHeader>
                            <AccordionContent>
                                <AccordionDescription>
                                    Track and protect your IPRs, patents with our integrated management system.
                                </AccordionDescription>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader>
                                <i class='bx bxs-x-square value__accordion-icon' style={{
                                    backgroundColor: "hsl(228, 100%, 97%)",
                                    padding: "5px",
                                    borderRadius: ".25rem",
                                    fontSize: "18px",
                                    color: " hsl(228, 66%, 53%)",
                                    marginRight: ".75rem",
                                    transition: "0.7s"
                                }}></i>
                                <h3 class="value__accordion-title">
                                    AI-Powered Analytics
                                </h3>
                                <AccordionArrow>
                                    <i class='bx bxs-down-arrow' style={{
                                        backgroundColor: "hsl(228, 100%, 97%)",
                                        padding: "5px",
                                        borderRadius: ".25rem",
                                        fontSize: "18px",
                                        color: " hsl(228, 66%, 53%)",
                                        marginRight: ".75rem",
                                        transition: "0.7s"
                                    }}></i>
                                </AccordionArrow>
                            </AccordionHeader>
                            <AccordionContent>
                                <AccordionDescription>
                                    AI-driven insights to help you identify opportunities and protect your ideas.
                                </AccordionDescription>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader>
                                <i class='bx bxs-bar-chart-square value__accordion-icon' style={{
                                    backgroundColor: "hsl(228, 100%, 97%)",
                                    padding: "5px",
                                    borderRadius: ".25rem",
                                    fontSize: "18px",
                                    color: " hsl(228, 66%, 53%)",
                                    marginRight: ".75rem",
                                    transition: "0.7s"
                                }}></i>
                                <h3 class="value__accordion-title">
                                    Find mentors
                                </h3>
                                <AccordionArrow>
                                    <i class='bx bxs-down-arrow' style={{
                                        backgroundColor: "hsl(228, 100%, 97%)",
                                        padding: "5px",
                                        borderRadius: ".25rem",
                                        fontSize: "18px",
                                        color: " hsl(228, 66%, 53%)",
                                        marginRight: ".75rem",
                                        transition: "0.7s"
                                    }}></i>
                                </AccordionArrow>
                            </AccordionHeader>
                            <AccordionContent>
                                <AccordionDescription>
                                    Connect with investors and government agencies to take your research or startup to
                                    the next level.
                                </AccordionDescription>
                            </AccordionContent>
                        </AccordionItem>
                    </Grid2>
                </Grid2>
            </Grid2>
        </StyledServices >
    )
}

export default Services;