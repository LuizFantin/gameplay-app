import React from "react";
import { theme } from "../../global/styles/theme";
import { Avatar } from "../Avatar";
import { BulletStatus, Container, MemberInfo, StatusContainer, StatusText, Title } from "./styles";

type MemberProps = {
    username: string;
    status: string;
    avatar_url: string;
    id: string;
};

export function Member({username, status, avatar_url, id}: MemberProps){
    return(
        <Container>
            <Avatar
                urlImage={avatar_url}
            />

            <MemberInfo>
                <Title>
                    {username}
                </Title>
                <StatusContainer>
                    <BulletStatus color={status === 'online' ? theme.colors.on : theme.colors.primary} width={8}/>
                    <StatusText>
                        {status}
                    </StatusText>
                </StatusContainer>
            </MemberInfo>
        </Container>
    )
}