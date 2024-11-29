import React from "react";
import { StyledFooterCard, StyledList } from "./footer-card.styles";

const FooterCard = ({ details }) => {
    return (
        <StyledFooterCard>
            <h3 class="footer__title">
                {details[0]}
            </h3>
            <StyledList>
                <li>
                    <a href="#">{details[1]}</a>
                </li>

                <li>
                    <a href="#">{details[2]}</a>
                </li>

                <li>
                    <a href="#">{details[3]}</a>
                </li>
            </StyledList>
        </StyledFooterCard>
    )
}

export default FooterCard;