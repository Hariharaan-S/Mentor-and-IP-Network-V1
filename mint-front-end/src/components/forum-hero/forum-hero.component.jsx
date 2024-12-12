import React from "react";
import { ForumOverlay, StyledForumHero, StyledForumHeroContent, ForumButton } from "./forum-hero.styles";
import Button from "../button/button.component";
import { useNavigate } from "react-router";
const ForumHero = () => {
    const navigate = useNavigate();
    const findMentor = () => {
        navigate('/home/forum/mentor')
    }
    return (

        <StyledForumHero>
            <ForumOverlay />
            <StyledForumHeroContent>
                <h1>Connect. Collaborate. Create.</h1>
                <p>A platform where innovators, mentors, and investors come together to turn ideas into impactful solutions.</p>
                <ForumButton>
                    <Button onClick={findMentor} content={"Get mentorship"} styles={{ background: "#D8EBF6", boxShadow: "none", color: "black" }} />
                    <Button content={"Find investors"} styles={{ background: "#D8EBF6", boxShadow: "none", color: "black" }} />
                </ForumButton>

            </StyledForumHeroContent>
        </StyledForumHero>
    )
}

export default ForumHero;