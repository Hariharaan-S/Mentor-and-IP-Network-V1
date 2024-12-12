import React, { useContext } from "react";
import { StyledHomeContainer, StyledHomeTitle, StyledHomeData, StyledHomeDescription } from './hero-container.styles'
import { UserContext } from "../../context/user.context";
import LoadingIcon from "../../asset/gif/Settings.gif"
import { useTranslation } from "react-i18next";

const HeroContainer = ({ heroContent, styles, otherStyles, children }) => {
    const { t } = useTranslation();
    const { isLoading, isFrameVisible } = useContext(UserContext);
    return (
        <StyledHomeContainer style={styles}>
            <StyledHomeData style={otherStyles}>
                <StyledHomeTitle>
                    {t(`heroContent.main`, { returnObjects: true })}
                </StyledHomeTitle>
                <StyledHomeDescription>
                    {t(`heroContent.subMain`, { returnObjects: true })}
                </StyledHomeDescription>
                {
                    React.Children.toArray(children)[0]
                }
            </StyledHomeData>
            {
                isLoading && <img src={LoadingIcon} alt="" />
            }
            {
                isFrameVisible && React.Children.toArray(children)[1]
            }
        </StyledHomeContainer>
    )
}

export default HeroContainer;