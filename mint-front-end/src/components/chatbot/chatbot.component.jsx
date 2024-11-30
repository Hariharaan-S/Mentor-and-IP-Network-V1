import React from "react";
import {
    Container, Chat, Card, CardHeader, UserContainer,
    UserImg, OnlineIcon, UserInfo, ImgContainer, CardBody, CardFooter, Input,
    InputGroup, Button
} from './chatbot.styles'

const ChatComponent = ({ styles }) => {
    return (
        <Container style={styles}>
            <Chat>
                <Card>
                    <CardHeader>
                        <UserContainer>
                            <ImgContainer>
                                <UserImg src="https://i.pinimg.com/736x/22/61/27/226127c9eec366b217c1db96fe720388.jpg" alt="User" />
                                <OnlineIcon />
                            </ImgContainer>
                            <UserInfo>
                                <span>Patify</span>
                                <p>Talk about Patents</p>
                            </UserInfo>
                        </UserContainer>
                    </CardHeader>
                    <CardBody id="messageFormeight"></CardBody>
                    <CardFooter>
                        <InputGroup id="messageArea">
                            <Input type="text" id="text" name="msg" placeholder="Type your message..." autoComplete="off" required />
                            <Button type="submit" id="send">
                                <i class='bx bxs-send'></i>
                            </Button>
                        </InputGroup>
                    </CardFooter>
                </Card>
            </Chat>
        </Container>
    );
};

export default ChatComponent;
