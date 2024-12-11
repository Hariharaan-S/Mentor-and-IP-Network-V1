import React, { Fragment } from 'react'
import { Outlet } from 'react-router'
import { StartupOverlay, StyledStartupContainer, StyledStartupHero } from './startup.styles'

const Startup = () => {
    return (
        <Fragment>
            <StyledStartupHero>
                <StartupOverlay />
                <StyledStartupContainer>
                    <h1>Empower your startup with us.</h1>
                    <p>Fueling startup growth by streamlining IPR management processes, providing tools for securing
                        investments, and fostering meaningful collaboration between innovators, mentors, and investors,
                        all within a unified platform designed for entrepreneurial success.</p>
                </StyledStartupContainer>
            </StyledStartupHero>
            <Outlet />
        </Fragment>
    )
}

export default Startup