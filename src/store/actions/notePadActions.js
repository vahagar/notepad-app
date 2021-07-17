import {setListData, setGistData} from "../reducers/notePadReducer";
import apiCall from "../../api/Https";

export const getNotePadListAction = () => async (dispatch) => {
    const response = await apiCall('/gists')
    if (Array.isArray(response)) {
        dispatch(setListData(response));
    }
};

export const getNotePadAction = gist_id => async (dispatch) => {
    const response = await apiCall(`/gists/${gist_id}`)
    if (response) {
        dispatch(setGistData(response));
    }
};

export const updateNotePadAction = params => async (dispatch) => {
    const response = await apiCall(`/gists/${params.gist_id}`, 'PATCH', params)
    console.log(response)
    if (response) {
        // dispatch(setGistData(response));
    }
};