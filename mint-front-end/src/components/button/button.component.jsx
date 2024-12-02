import React from "react";
import { StyledButton } from "./button.styles";

const Button = ({ content, styles, buttonType, onClick }) => {

    const typeOfButton = buttonType ? buttonType : "button"

    return (

        <StyledButton onClick={onClick} type={typeOfButton} style={styles}>
            {content}
        </StyledButton>

    )

}

export default Button;