import React from 'react';
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import {Card} from "./components/Card";

function App() {
    return (
        <AppContainer>
            <Column text="Column Title">
                <Card text="Card text"/>
            </Column>
        </AppContainer>
    );
}

export default App;
