import React from 'react';
import { useAppState } from "./state/AppStateContext";
import { AppContainer } from "./styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { addList } from "./state/actions";

function App() {
    const { lists, dispatch } = useAppState();
    const onAdd = (text: string) => dispatch(addList(text));

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
