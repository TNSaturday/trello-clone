import React, { createContext, useContext, Dispatch, FC } from "react"
import { appStateReducer, AppState, List, Task } from "./appStateReducer";
import { Action } from "./actions";
import { useImmerReducer } from "use-immer";
import {DragItem} from "./DragItem";

type AppStateProviderProps = {
    children?: React.ReactNode;
};

type AppStateContextProps = {
    lists: List[];
    getTasksByListId(id: string): Task[];
    dispatch: Dispatch<Action>;
    draggedItem: DragItem | null;
};

const AppStateContext = createContext<AppStateContextProps>(
    {} as AppStateContextProps
);

const appData: AppState = {
    lists: [
        {
            id: "0",
            text: "To Do",
            tasks: [{ id: "c0", text: "Generate app scaffold" }]
        },
        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },
        {
            id: "2",
            text: "Done",
            tasks: [{ id: "c3", text: "Begin to use static typing" }]
        }
    ],
    draggedItem: null
};

export const AppStateProvider: FC<AppStateProviderProps> = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData);

    const { lists, draggedItem } = state;

    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || [];
    }

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}>
            {children}
        </AppStateContext.Provider>
    );
};

export const useAppState = () => {
    return useContext(AppStateContext);
};
