import React from "react";
import { Avatar } from "../Avatar";
import { Container, Content, Greeting, Message, UserContainer, Username } from "./styles";

export function Profile() {
    return (
        <Container>
            <Avatar urlImage="https://github.com/LuizFantin.png"/>
            <Content>
                <UserContainer>
                    <Greeting>
                        Olá,
                    </Greeting>
                    <Username>
                        Luiz
                    </Username>
                </UserContainer>
                <Message>
                    Hoje é dia de vitória
                </Message>
            </Content>
        </Container>
    )
}