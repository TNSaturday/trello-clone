import React from 'react';
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { Card } from "./components/Card";
import { AddNewItem } from "./components/AddNewItem";

function App() {
    const onAdd = (text: string) => console.log(text);

    return (
        <AppContainer>
            <Column text="Column Title">
                <Card text="Card text"/>
            </Column>
            <AddNewItem onAdd={onAdd} toggleButtonText="Add another list" />
        </AppContainer>
    );
}

export default App;
