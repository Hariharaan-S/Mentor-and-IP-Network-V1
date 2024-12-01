import { Grid2 } from "@mui/material";
import React from "react";
import ContactImage from "../../asset/contact.jpg"
import { Typography } from "@mui/material";
import { StyledContact, StyledContactImage, StyledImageOverlay } from "./contact.styles";
import { FeatureTitle, FeatureSubTitle } from "../features/features.styles";
import Button from "../button/button.component";

const ContactUs = () => {
    return (
        <StyledContact id="contact">
            <Grid2 sx={{
                display: "flex",
                flexDirection: "row"
            }}>
                <Grid2 sx={{
                    width: "60%",
                }}>
                    <Grid2 sx={{ width: "80%" }}>
                        <FeatureSubTitle>Contact Us</FeatureSubTitle>
                        <FeatureTitle>
                            Easy to Contact Us<span>.</span>
                        </FeatureTitle>
                    </Grid2>
                    <p class="value__description" style={{
                        fontSize: "1rem",
                        marginBottom: "2rem",
                        width: "90%",
                        fontFamily: 'Poppins, sans-serif'
                    }}>
                        If you have any questions or need assistance, our team is here to provide support and
                        address your queries promptly.
                        Feel free to get in touch with us anytime. We're here to assist you.
                    </p>
                    <Grid2 container rowSpacing={2} columnSpacing={1}>
                        <Grid2 sx={{
                            width: "35%",
                            padding: "1.5rem",
                            borderRadius: "10px",
                            transition: '.5s ease',
                            border: "2px solid hsl(228, 99%, 98%)",
                            "&:hover": {
                                boxShadow: "0 12px 16px hsla(228, 66%, 45%, .1)"
                            }
                        }}>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: 3 }}>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: " hsl(228, 15%, 50%)",
                                    marginBottom: ".25rem",
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 600,
                                    "& > i": {
                                        marginRight: "5px",
                                        padding: "5px",
                                        backgroundColor: "hsl(228, 100%, 97%)",
                                        borderRadius: "6px",
                                        fontSize: "1.25rem",
                                        color: "hsl(228, 66%, 53%)"
                                    }
                                }} variant="h6"><i class='bx bxs-envelope'></i></Typography>

                                <Grid2>
                                    <Typography sx={{
                                        fontSize: "1rem",
                                        color: " hsl(228, 15%, 50%)",
                                        marginBottom: ".25rem",
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 600
                                    }}>Email Us</Typography>
                                    <Typography variant="body1" sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        color: " hsl(228, 15%, 50%)",
                                        fontWeight: 400,
                                        lineHeight: 1.5,
                                        fontSize: ".9rem",
                                    }}>bot123@gmail.com</Typography>
                                </Grid2>
                            </div>
                            <Button styles={{ marginTop: "2rem" }} content={"Email"} />
                        </Grid2>
                        <Grid2 sx={{
                            width: "35%",
                            padding: "1.5rem",
                            borderRadius: "10px",
                            transition: '.5s ease',
                            border: "2px solid hsl(228, 99%, 98%)",
                            "&:hover": {
                                boxShadow: "0 12px 16px hsla(228, 66%, 45%, .1)"
                            }
                        }}>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: 3 }}>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: " hsl(228, 15%, 50%)",
                                    marginBottom: ".25rem",
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 600,
                                    "& > i": {
                                        marginRight: "5px",
                                        padding: "5px",
                                        backgroundColor: "hsl(228, 100%, 97%)",
                                        borderRadius: "6px",
                                        fontSize: "1.25rem",
                                        color: "hsl(228, 66%, 53%)"
                                    }
                                }} variant="h6"><i class='bx bx-error-circle'></i></Typography>

                                <Grid2>
                                    <Typography sx={{
                                        fontSize: "1rem",
                                        color: " hsl(228, 15%, 50%)",
                                        marginBottom: ".25rem",
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 600
                                    }}>Complain</Typography>
                                    <Typography variant="body1" sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        color: " hsl(228, 15%, 50%)",
                                        fontWeight: 400,
                                        lineHeight: 1.5,
                                        fontSize: ".9rem",
                                    }}>MINT.ac.in</Typography>
                                </Grid2>
                            </div>
                            <Button styles={{ marginTop: "2rem" }} content={"Register"} />
                        </Grid2>

                        <Grid2 sx={{
                            width: "35%",
                            padding: "1.5rem",
                            borderRadius: "10px",
                            transition: '.5s ease',
                            border: "2px solid hsl(228, 99%, 98%)",
                            "&:hover": {
                                boxShadow: "0 12px 16px hsla(228, 66%, 45%, .1)"
                            }
                        }}>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: 3 }}>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: " hsl(228, 15%, 50%)",
                                    marginBottom: ".25rem",
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 600,
                                    "& > i": {
                                        marginRight: "5px",
                                        padding: "5px",
                                        backgroundColor: "hsl(228, 100%, 97%)",
                                        borderRadius: "6px",
                                        fontSize: "1.25rem",
                                        color: "hsl(228, 66%, 53%)"
                                    }
                                }} variant="h6"><i class='bx bx-bell'></i></Typography>

                                <Grid2>
                                    <Typography sx={{
                                        fontSize: "1rem",
                                        color: " hsl(228, 15%, 50%)",
                                        marginBottom: ".25rem",
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 600
                                    }}>FAQs</Typography>
                                    <Typography variant="body1" sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        color: " hsl(228, 15%, 50%)",
                                        fontWeight: 400,
                                        lineHeight: 1.5,
                                        fontSize: ".9rem",
                                    }}>Recent FAQs</Typography>
                                </Grid2>
                            </div>
                            <Button styles={{ marginTop: "2rem" }} content={"View Now"} />
                        </Grid2>

                        <Grid2 sx={{
                            width: "35%",
                            padding: "1.5rem",
                            borderRadius: "10px",
                            transition: '.5s ease',
                            border: "2px solid hsl(228, 99%, 98%)",
                            "&:hover": {
                                boxShadow: "0 12px 16px hsla(228, 66%, 45%, .1)"
                            }
                        }}>
                            <div style={{ display: "flex", flexDirection: "row", columnGap: 3 }}>
                                <Typography sx={{
                                    fontSize: "1rem",
                                    color: " hsl(228, 15%, 50%)",
                                    marginBottom: ".25rem",
                                    fontFamily: "Poppins, sans-serif",
                                    fontWeight: 600,
                                    "& > i": {
                                        marginRight: "5px",
                                        padding: "5px",
                                        backgroundColor: "hsl(228, 100%, 97%)",
                                        borderRadius: "6px",
                                        fontSize: "1.25rem",
                                        color: "hsl(228, 66%, 53%)"
                                    }
                                }} variant="h6"><i class='bx bx-book-bookmark'></i></Typography>

                                <Grid2>
                                    <Typography sx={{
                                        fontSize: "1rem",
                                        color: " hsl(228, 15%, 50%)",
                                        marginBottom: ".25rem",
                                        fontFamily: "Poppins, sans-serif",
                                        fontWeight: 600
                                    }}>About Us</Typography>
                                    <Typography variant="body1" sx={{
                                        fontFamily: "Poppins, sans-serif",
                                        color: " hsl(228, 15%, 50%)",
                                        fontWeight: 400,
                                        lineHeight: 1.5,
                                        fontSize: ".9rem",
                                    }}>Know About Us</Typography>
                                </Grid2>
                            </div>
                            <Button styles={{ marginTop: "2rem" }} content={"Learn More"} />
                        </Grid2>
                    </Grid2>


                </Grid2>
                <StyledImageOverlay></StyledImageOverlay>
                <StyledContactImage>
                    <img src={ContactImage} alt="" />
                </StyledContactImage>
            </Grid2>
        </StyledContact >
    )
}

export default ContactUs;