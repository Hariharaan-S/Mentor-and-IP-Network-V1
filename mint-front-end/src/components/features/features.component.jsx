import React from "react";
import { Grid2, Typography } from "@mui/material";
import Button from "../button/button.component";
import { FeatureContainer, FeatureTitle, FeatureSubTitle } from "./features.styles";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Features = ({ type, styles }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const handleRoute = (route) => {
        navigate(route);
    }
    const cards = t(`featureCard.${type}`, { returnObjects: true });
    return (
        <FeatureContainer id="features" style={styles}>
            <FeatureSubTitle>Explore our Features</FeatureSubTitle>
            <FeatureTitle>What MINT Offers<span style={{ color: "hsl(25, 83%, 53%)" }}>.</span></FeatureTitle>
            <Grid2
                container
                rowSpacing={1}
                columnSpacing={7}
                sx={{ paddingTop: "5rem", paddingBottom: "5rem", paddingLeft: "2rem", flexWrap: "wrap" }}
            >
                {cards && cards.map((el, index) => (
                    <Grid2 item key={index} sx={{
                        position: "relative",
                        width: "30%",
                        height: "40vh",
                        flex: "1 1 20%",
                        padding: "1.5rem",
                        borderRadius: "20px",
                        transition: '.5s ease',
                        "&:hover": {
                            boxShadow: "0 12px 16px hsla(228, 66%, 45%, .1)"
                        }
                    }}>
                        <Typography sx={{
                            fontSize: "1.5rem",
                            color: " hsl(228, 15%, 50%)",
                            marginBottom: ".25rem",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 600
                        }} variant="h6">{el.title}</Typography>
                        <Typography variant="body1" sx={{
                            fontFamily: "Poppins, sans-serif",
                            color: " hsl(228, 15%, 50%)",
                            fontWeight: 400,
                            lineHeight: 1.5,
                            fontSize: ".9rem"
                        }}>{el.description}</Typography>
                        <Button key={index} onClick={() => handleRoute(el.route)} styles={{ position: "absolute", bottom: 20 }} content={"Explore"} />
                    </Grid2>

                ))}
            </Grid2>
        </FeatureContainer>
    );
};

export default Features;
