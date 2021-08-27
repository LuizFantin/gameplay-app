import React from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { Banner, BannerContent, Footer, MembersList, Subtitle, Title } from "./styles";
import BannerImg from "../../assets/banner.png"
import { ListHeader } from "../../components/ListHeader";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails(){

    const members = [
        {
            id: '1',
            username: 'Luiz Fantin',
            avatar_url: 'https://github.com/LuizFantin.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Luiz Fantin',
            avatar_url: 'https://github.com/LuizFantin.png',
            status: 'offline'
        },
        {
            id: '3',
            username: 'Luiz Fantin',
            avatar_url: 'https://github.com/LuizFantin.png',
            status: 'online'
        },
    ]

    return(
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <Banner source={BannerImg}>
                <BannerContent>
                    <Title>
                        Lendários
                    </Title>

                    <Subtitle>
                        Hoje é dia de Axie bebê
                    </Subtitle>
                </BannerContent>
            </Banner>

            <ListHeader
                title="Jogadores"
                subtitle="Total 3"
            />

            <MembersList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <Member
                        avatar_url={item.avatar_url}
                        username={item.username}
                        status={item.status}
                        id={item.id}
                    />
                )}
                ItemSeparatorComponent={ListDivider}
            />

            <Footer>
                <ButtonIcon
                    title = "Entrar na partida"
                />
            </Footer>

        </Background>

    )
}