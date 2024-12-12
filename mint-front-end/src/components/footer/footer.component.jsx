import React from "react";
import { FooterContainer, FooterCopy, FooterInfo, FooterPrivacy, StyledFooter } from "./footer.styles";
import FooterCard from "../footer-card/footer-card.component";
import SocialMediaBox from "../social-media/social-media.component";

const Footer = () => {
    return (
        <StyledFooter>
            <div style={{
                marginLeft: "1.5rem",
                marginRight: "1.5rem",
                display: "flex",
                flexDirection: "column",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "auto",
                }}>
                    <a href="hello" style={{
                        fontSize: "1.2rem",
                        color: "hsl(228, 66%, 53%)",
                        fontWeight: 600,
                        textDecoration: "none"
                    }}>
                        MINT<i class='bx bxs-bot'></i>
                    </a>
                    <p style={{
                        fontSize: ".9rem",
                        fontWeight: 500,
                        color: "hsl(228, 15%, 50%)"
                    }}>
                        Empowering innovation through seamless patent verification and collaborative tools for startups.
                    </p>
                    <br />
                </div>
                <FooterContainer>
                    <FooterCard details={["About", "About Us", "Features", "News & Blog"]} />
                    <FooterCard details={["MINT", "How we Work?", "Capital", "Security"]} />
                    <FooterCard details={["Support", "FAQs", "Support Center", "Contact Us"]} />
                    <SocialMediaBox />
                </FooterContainer>
            </div>
            <FooterInfo>
                <FooterCopy>
                    &#169; MINT. All rigths reserved
                </FooterCopy>
                <FooterPrivacy>
                    <a href="#">Terms & Agreements</a>
                    <a href="#">Privacy Policy</a>
                </FooterPrivacy>
            </FooterInfo>
        </StyledFooter>
    )
}

export default Footer;