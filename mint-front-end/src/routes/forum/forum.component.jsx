import React, { Fragment } from "react";
import { StyledForum } from "./forum.styles";
import ForumHero from "../../components/forum-hero/forum-hero.component";
import { Outlet } from "react-router";


const Forum = () => {
    return (
        <Fragment>
            <StyledForum>
                <ForumHero />
            </StyledForum>
            <Outlet />
        </Fragment>

    )
}

export default Forum;