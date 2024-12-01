import React from "react";
import { StyledButton } from "./button.styles";
import { Link } from "react-router";

const Button = ({ content, styles, linkTo, buttonType }) => {

    const typeOfButton = buttonType ? buttonType : "button"

    return (
        <Link to={linkTo}>
            <StyledButton type={typeOfButton} style={styles}>
                {content}
            </StyledButton>
        </Link>

    )

}

export default Button;