import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { Check, Checked, Container, Content, Gradient, Title } from "./styles";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}

export function Category({title, icon: Icon, checked = false, ...rest}: Props) {
    return (
        <Container {...rest}>
            <Gradient
                colors={[theme.colors.secondary80, theme.colors.secondary100]}
            >
                <Content style={{ opacity: checked ? 1 : 0.4 }}>
                    {checked ? <Checked>
                        
                    </Checked> 
                    : <Check>
                        
                    </Check>}
                    <Icon
                        width={48}
                        height={48}
                    />
                    <Title>
                        {title}
                    </Title>
                </Content>
            </Gradient>
        </Container>
    )
}