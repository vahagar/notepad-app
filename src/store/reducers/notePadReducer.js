import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    },
})


export const { setListData, setGistData } = notePadSlice.actions

export default notePadSlice.reducer