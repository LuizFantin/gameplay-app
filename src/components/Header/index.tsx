import React, {ReactNode} from "react";
import { BorderlessButton } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { Action, Container, Title } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

type Props = {
    title: string;
    action?: ReactNode;

}

export function Header({title, action}: Props){

    const navigation = useNavigation();
    
    function handleGoBack() {
        navigation.goBack();
    }

    return(
       <Container
        colors={[theme.colors.secondary100, theme.colors.secondary40]}
       >

        <BorderlessButton onPress={handleGoBack}>
            <Feather
                name="arrow-left"
                size={24}
                color={theme.colors.heading}
            />
        </BorderlessButton>

        <Title>
            {title}
        </Title>

        {
            action &&
            <Action>
                {action}
            </Action>
        }

       </Container>
    )
}