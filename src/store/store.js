import {configureStore} from "@reduxjs/toolkit";

import notePadReducer from './reducers/notePadReducer';

export default configureStore({
    reducer: {
        notePad: notePadReducer,
    },
})