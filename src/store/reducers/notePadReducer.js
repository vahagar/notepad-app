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
                listById[item.id] = item
            })
            state.list = list;
            state.listById = listById
        },
    },
})


export const { setListData } = notePadSlice.actions

export default notePadSlice.reducer