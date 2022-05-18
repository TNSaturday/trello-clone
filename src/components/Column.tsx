import React, { FC } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import {AddNewItem} from "./AddNewItem";

type ColumnProps = {
    text: string;
    children?: React.ReactNode;
}

export const Column: FC<ColumnProps> = ({ text, children }: ColumnProps) => {
    return (
        <ColumnContainer>
            <ColumnTitle>{text}</ColumnTitle>
            {children}
            <AddNewItem
                onAdd={console.log}
                toggleButtonText="+ Add another task"
                dark
            />
        </ColumnContainer>
    );
}