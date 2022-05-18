import React from 'react';
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";

function App() {
    const { lists } = useAppState();
    const onAdd = (text: string) => console.log(text);

    return (
        <AppContainer>
            {
                lists.map((list) => (
                    <Column text={list.text} id={list.id} key={list.id} />
                ))
            }
            <AddNewItem onAdd={onAdd} toggleButtonText="+ Add another list" />
        </AppContainer>
    );
}

export default App;
