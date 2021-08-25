import React from 'react';

import Illustrator from '../../assets/illustration.png'
import { Container, Content, IllustratorImage, Subtitle, Title } from './styles';
import { ButtonIcon } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';

export function SignIn(){
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('HomeScreen');
    }

    return(
        <Background>
            <Container>
                <IllustratorImage 
                    source={Illustrator}
                    resizeMode='stretch'
                />
                <Content>
                    <Title>
                        Conecte-se {'\n'}
                        e organize suas {'\n'}
                        jogatinas
                    </Title>
                    <Subtitle>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Subtitle>
                    <ButtonIcon 
                        onPress={handleSignIn} 
                        title='Entrar com Discord'
                    />
                </Content>

            </Container>
        </Background>
    )
}