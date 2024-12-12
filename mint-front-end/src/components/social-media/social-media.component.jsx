import React from "react";
import { FooterSocialList, SocialMediaLink } from "./social-media.styles";

const SocialMediaBox = () => {

    return (
        <div>
            <h3 class="footer__title">
                Follow Us
            </h3>
            <FooterSocialList>
                <SocialMediaLink>
                    <i class='bx bxl-facebook-circle'></i>
                </SocialMediaLink>
                <SocialMediaLink>
                    <i class='bx bxl-instagram-alt'></i>
                </SocialMediaLink>
                <SocialMediaLink>
                    <i class='bx bxl-linkedin-square'></i>
                </SocialMediaLink>
            </FooterSocialList>
        </div>
    )
}

export default SocialMediaBox;