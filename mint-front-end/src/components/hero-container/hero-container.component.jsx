import React from "react";
import { StyledHomeContainer, StyledHomeTitle, StyledHomeData, StyledHomeDescription } from './hero-container.styles'

const HeroContainer = ({ heroContent, styles, otherStyles, children }) => {
    return (
        <StyledHomeContainer style={styles}>
            <StyledHomeData style={otherStyles}>
                <StyledHomeTitle>
                    {heroContent["main"]}
                </StyledHomeTitle>
                <StyledHomeDescription>
                    {heroContent["sub-main"]}
                </StyledHomeDescription>
                {
                    children
                }
            </StyledHomeData>
        </StyledHomeContainer>
    )
}

export default HeroContainer;