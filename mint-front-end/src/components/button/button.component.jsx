import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ content, styles }) => {

    return (
        <StyledButton type="button" style={styles}>
            {content}
        </StyledButton>
    )

}

export default Button;