import React from "react";
import { TouchableOpacityProps } from "react-native";
import DiscordImg from '../../assets/discord.png'
import { Container, ImageDiscord, Title, Wrapper } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
}

export function ButtonIcon({title, activeOpacity}: Props){
    return(
        <Container activeOpacity={activeOpacity}>
            <Wrapper>
                <ImageDiscord source={DiscordImg}/>
            </Wrapper>
            <Title>
                {title}
            </Title>
        </Container>
    )
}