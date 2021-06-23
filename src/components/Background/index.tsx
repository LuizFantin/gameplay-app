import React from "react";
import { ReactNode } from "react";
import { theme } from "../../global/styles/theme";
import { Gradient } from "./styles";

type Props = {
    children: ReactNode;
}

export function Background({children}: Props) {
    return (
        <Gradient
            colors={[theme.colors.secondary80, theme.colors.secondary100]}
        >
            {children}
        </Gradient>
    )
}