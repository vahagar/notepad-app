import { createSlice } from '@reduxjs/toolkit';


const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('state');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = loadFromLocalStorage()?.notePad;

const initialState = persistedStore || {
    list: [],
    listById: {},
}

export const notePadSlice = createSlice({
    name: 'notePad',
    initialState,
    reducers: {
        setListData: (state, action) => {
            const list = [];
            const listById = {};
            action.payload.forEach(item => {
                list.push(item.id);
                listById[item.id] = {
                    id: item.id,
                    description: item.description,
                    files: item.files
                }
            })
            state.list = list;
            state.listById = listById
        },
        setGistData: (state, action) => {
            state.listById[action.payload.id] = {
                id: action.payload.id,
                description: action.payload.description,
                files: action.payload.files
            };
            !state.list.includes(action.payload.id) && state.list.push(action.payload.id)
        },
        deleteGistData: (state, action) => {
            const index = state.list.indexOf(action.payload);
            if(index !== -1){
                state.list.splice(index, 1)
            }
            delete state.listById[action.payload]
        }
    },
})


export const { setListData, setGistData, deleteGistData } = notePadSlice.actions

export default notePadSlice.reducer