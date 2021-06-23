import React from "react";
import { RectButtonProps} from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png'
import { Container, ImageDiscord, Title, Wrapper } from "./styles";

type Props = RectButtonProps & {
    title: string;
}

export function ButtonIcon({title, onPress}: Props){
    return(
        <Container onPress={onPress}>
            <Wrapper>
                <ImageDiscord source={DiscordImg}/>
            </Wrapper>
            <Title>
                {title}
            </Title>
        </Container>
    )
}