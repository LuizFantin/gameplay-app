import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { SvgProps } from "react-native-svg";
import { theme } from "../../global/styles/theme";
import { Check, Checked, Container, Content, Gradient, Title } from "./styles";

type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    hasCheckBox?: boolean;
    checked?: boolean;
}

export function Category({title, icon: Icon, checked = false, hasCheckBox = false, ...rest}: Props) {
    return (
        <Container {...rest}>
            <Gradient
                colors={[theme.colors.secondary80, theme.colors.secondary100]}
            >
                <Content 
                    style={{ opacity: checked ? 1 : 0.5 }}
                    colors={ [checked ? theme.colors.secondary75 : theme.colors.secondary50, theme.colors.secondary40] }
                >
                    {hasCheckBox && (checked ? <Checked>
                        
                    </Checked> 
                    : <Check>
                        
                    </Check>)}
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