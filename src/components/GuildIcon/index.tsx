import React from "react";
import { SvgProps } from "react-native-svg";
import { ImgGuild } from "./styles";


export function GuildIcon() {
    const uri = 'https://steamuserimages-a.akamaihd.net/ugc/942812330891654366/BB8277D0A6CD5C9E25F6FC1BD5B1B020C6998D72/'
    return (
        <ImgGuild
            source={{ uri }}
            resizeMode="cover"
        />
            
    )
}