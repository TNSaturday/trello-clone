import React, { FC } from "react";
import { CardContainer } from "../styles";

type CardProps = {
    text: string;
}

export const Card: FC<CardProps> = ({ text }: CardProps) => {
    return <CardContainer>{text}</CardContainer>
}