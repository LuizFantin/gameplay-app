import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled(RectButton)`

`;

export const Subcontainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-self: center;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;

export const PlayersInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CategoryText = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
    margin-right: 24px;
`;

export const PlayersText = styled.Text`
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.highlight};
    font-size: 13px;
    margin-right: 24px;
    margin-left: 7px;
`;


export const Footer = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const DateInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const DateText = styled.Text`
    font-family: ${theme.fonts.text500};
    color: ${theme.colors.heading};
    font-size: 13px;
    margin-left: 7px;
`;

