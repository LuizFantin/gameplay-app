import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { categories } from "../../utils/categories";
import { GuildIcon } from "../GuildIcon";
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { CategoryText, Container, Content, Header, PlayersInfo, Subcontainer, Title, PlayersText, Footer, DateInfo, DateText } from "./styles";
import { theme } from "../../global/styles/theme";

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

export type GuildProps = {
    id: string;
    name: string;
    icon: null;
    owner: boolean;
}

type Props = RectButtonProps & {
    data: AppointmentProps
}

export function Appointment({data, ...rest}: Props) {
    const [category] = categories.filter(item => item.id === data.category);

    return (
        <Container {...rest}>
            <Subcontainer>
                <GuildIcon/>
                <Content>
                    <Header>
                        <Title>
                            {data.guild.name}
                        </Title>
                        <CategoryText>
                            {category.title}
                        </CategoryText>
                    </Header>
                    <Footer>
                        <DateInfo>
                            <CalendarSvg/>
                            <DateText>
                                {data.date}
                            </DateText>
                        </DateInfo>
                        <PlayersInfo>
                            <PlayerSvg fill={data.guild.owner ? theme.colors.primary : theme.colors.on}/>
                            <PlayersText style={{ color: data.guild.owner ? theme.colors.primary : theme.colors.on}}>
                                {data.guild.owner? 'Anfitrião' : 'Visitante'}
                            </PlayersText>
                        </PlayersInfo>
                    </Footer>

                </Content>
            </Subcontainer>
        </Container>
    )
}