import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const SelectContainer = styled.View``;

export const Content = styled.View`
    margin-top: 42px;
`;

export const Header = styled.View`
    width: 100%;
    padding: 0px 24px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${getStatusBarHeight() + 26}px;
    margin-bottom: 42px;
`;

export const AppointmentsList = styled.FlatList`
    margin-top: 24px;
    margin-left: 24px;
`;