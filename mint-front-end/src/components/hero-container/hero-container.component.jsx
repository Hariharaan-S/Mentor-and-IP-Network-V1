import React, { useContext } from "react";
import { StyledHomeContainer, StyledHomeTitle, StyledHomeData, StyledHomeDescription } from './hero-container.styles'
import { UserContext } from "../../context/user.context";

const HeroContainer = ({ heroContent, styles, otherStyles, children }) => {
    const { isLoading, isFrameVisible } = useContext(UserContext);
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
                    React.Children.toArray(children)[0]
                }
            </StyledHomeData>
            {
                isLoading && <img src={React.Children.toArray(children)[1]} alt="" />
            }
            {
                isFrameVisible && React.Children.toArray(children)[2]
            }
        </StyledHomeContainer>
    )
}

export default HeroContainer;