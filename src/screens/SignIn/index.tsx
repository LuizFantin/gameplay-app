import React from 'react';

import Illustrator from '../../assets/illustration.png'
import { StatusBar, Text } from 'react-native'; 
import { Container, Content, IllustratorImage, Subtitle, Title } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn(){
    return(
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <IllustratorImage 
            source={Illustrator}
            resizeMode='stretch'
            />
            <Content>
                <Title>
                    Organize {'\n'}
                    suas jogatinas {'\n'}
                    facilmente
                </Title>
                <Subtitle>
                    Crie grupos para jogar seus games {'\n'}
                    favoritos com seus amigos
                </Subtitle>
                <ButtonIcon activeOpacity={0.7} title='Entrar com Discord'/>
            </Content>

        </Container>
    )
}