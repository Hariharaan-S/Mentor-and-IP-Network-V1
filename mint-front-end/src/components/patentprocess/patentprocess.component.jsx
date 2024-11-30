import React from "react";
import FeatureCard from "../card/card.component";
import { StyledProcessPatent } from "./patentprocess.styles";

const ProcessPatent = ({ process }) => {
    return (
        <StyledProcessPatent>
            {
                process.map((el, index) => {
                    return <FeatureCard key={index} main={el["main"]} sub={el["sub"]} image={el["image"]} />
                })
            }
        </StyledProcessPatent>
    )
}

export default ProcessPatent;