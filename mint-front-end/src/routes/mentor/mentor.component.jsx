import React from "react";
import { mentorDetails } from "../../utilities/mentor-details.utils";
import MentorCard from "../../components/mentor-card/mentor-card.component";
import { StyledMentorFind, SearchField, StyledInput } from "./mentor.styles";
import { Grid2 } from "@mui/material";
import Button from "../../components/button/button.component";
import SelectAutoWidth from "../../components/select/select.component";

const MentorFind = () => {
    return (
        <StyledMentorFind>
            <SearchField>
                <h3>Find your mentor</h3>
                <StyledInput type="text" placeholder="Search mentor"></StyledInput>
                <Button content={"Search"} styles={{ padding: "0.5rem", fontSize: ".9rem", width: "5rem", height: "2.7rem", marginTop: "12px" }} />
                <h3>Filter By: </h3>
                <SelectAutoWidth />
            </SearchField>

            <Grid2 container rowSpacing={"1.3rem"} columnSpacing={"1.2rem"}>
                {
                    mentorDetails.map((mentor, index) => {
                        return (
                            <Grid2>
                                <MentorCard key={index} media={mentor} />
                            </Grid2>

                        )
                    })
                }
            </Grid2>

        </StyledMentorFind>
    )
}

export default MentorFind;