import {configureStore} from "@reduxjs/toolkit";

import notePadReducer from './reducers/notePadReducer';

// export default configureStore({
//     reducer: {
//         notePad: notePadReducer,
//     },
// })

const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const store = configureStore({
    reducer: {
        notePad: notePadReducer,
    },
});

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;