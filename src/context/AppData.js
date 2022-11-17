import React, { createContext, useState } from 'react';
export const AppContext = createContext();
const AppData = ({ children }) => {
    const [data, setData] = useState([

    ])



    const dispatchDataEvent = (actionType, payload) => {
        console.log("CONTEXT", actionType, payload)
        switch (actionType) {
            case 'ADD_TASK':
                setData([...data, payload]);
                return;
            case 'REMOVE_TASK':
                setData([...payload]);
                return;
            case 'MARK_DONE':
                setData({});
                return;

            default:
                return;
        }
    };

    return (
        <AppContext.Provider value={{ data, dispatchDataEvent }}>
            {children}
        </AppContext.Provider>
    );
};
export default AppData;
