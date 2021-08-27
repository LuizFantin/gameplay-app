import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
`;

export const MemberInfo = styled.View`
    flex-direction: column;
`;
export const Title = styled.Text`
    font-family: ${theme.fonts.title700};
    color: ${theme.colors.heading};
    font-size: 18px;
`;
export const StatusContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const StatusText = styled.Text`
    font-family: ${theme.fonts.text400};
    color: ${theme.colors.highlight};
    font-size: 13px;
`;

export const BulletStatus = styled.View<{ color: string, width: number }>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 9px;
    background-color: ${props => props.color};
`;