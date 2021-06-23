import { LinearGradient } from "expo-linear-gradient";
import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled(RectButton)`
    width: 104px;
    height: 120px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    margin-right: 8px;
`;

export const Gradient = styled(LinearGradient)`
`;

export const Content = styled.View`
    width: 100px;
    height: 116px;
    background-color: ${theme.colors.secondary40};
    border-radius: 8px;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0px;
`;

export const Checked = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${theme.colors.primary};
    align-self: flex-end;
    margin-right: 7px;
    border-color: ${theme.colors.secondary50};
    border-radius: 3px;
    border-width: 2px;
`;

export const Check = styled.View`
    width: 12px;
    height: 12px;
    background-color: ${theme.colors.secondary100};
    align-self: flex-end;
    margin-right: 7px;
    border-color: ${theme.colors.secondary50};
    border-radius: 3px;
    border-width: 2px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.title500};
    color: ${theme.colors.heading};
    font-size: 15px;
`;