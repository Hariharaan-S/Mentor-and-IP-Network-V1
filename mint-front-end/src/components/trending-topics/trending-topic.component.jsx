import React from "react";
import { Grid2 } from "@mui/material";
import { Body, MessageCollection, MessageContainer, Trending, TrendingTitle } from "./trending-topics.styles";
import MediaCard from "../media-card/media-card.component";
import { FeatureSubTitle, FeatureTitle } from "../features/features.styles"

const TrendingTopics = ({ topics, trends, people }) => {
    return (
        <Body>
            <Grid2 container sx={{ width: "100%", flexDirection: "row", paddingLeft: "3rem", paddingRight: "3rem", paddingTop: "5rem", paddingBottom: "5rem" }}>
                {/* Trending Topics Section */}
                <Grid2 xs={12} md={8} sx={{ width: "80%" }}>
                    <MessageContainer>
                        <FeatureSubTitle>Explore Now!</FeatureSubTitle>
                        <FeatureTitle>Trending Topics</FeatureTitle>
                        <MessageCollection>
                            <Grid2 container spacing={3}>
                                {topics.map((topic, index) => (
                                    <Grid2 xs={12} sm={6} md={4} key={index} sx={{ flexDirection: "column", width: "25%" }}>
                                        <MediaCard media={topic} />
                                    </Grid2>
                                ))}
                            </Grid2>
                        </MessageCollection>
                    </MessageContainer>
                </Grid2>
                <Trending>
                    {/* Top Trending */}
                    <div>
                        <TrendingTitle>Top Trending</TrendingTitle>
                        <ul className="trending-list">
                            {trends.map((trend, index) => (
                                <li className="trend-item" key={index}>
                                    <i className={trend.logo}></i>
                                    {trend.trend}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Top People */}
                    <div className="top-people">
                        <TrendingTitle>Top People</TrendingTitle>
                        <ul className="trending-list">
                            {people.map((person, index) => (
                                <li className="trend-item" key={index}>
                                    <div className="message">
                                        <img src={person.image} alt={person.altText} />
                                        <div className="message-details">{person.name}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Trending>
            </Grid2>
        </Body>
    );
};

export default TrendingTopics;
