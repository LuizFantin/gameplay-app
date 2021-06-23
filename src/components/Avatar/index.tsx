import React from "react";
import { theme } from "../../global/styles/theme";
import { Gradient, ImgAvatar } from "./styles";

type Props = {
    urlImage: string;
}

export function Avatar({urlImage}:Props) {
    return (
        <Gradient
            colors={[theme.colors.secondary50, theme.colors.secondary70]}
        >
            <ImgAvatar
                source={{ uri: urlImage }}
            />
        </Gradient>
    )
}