import {setListData, setGistData, deleteGistData} from "../reducers/notePadReducer";
import apiCall from "../../api/Https";

export const getNotePadListAction = () => async (dispatch) => {
    const response = await apiCall(`/gists?rev=${Math.random()}`)
    if (typeof response === 'object' && !('error' in response) && Array.isArray(response)) {
        dispatch(setListData(response));
    }
};

export const getNotePadAction = gist_id => async (dispatch) => {
    const response = await apiCall(`/gists/${gist_id}`)
    if (typeof response === 'object' && response && !('error' in response)) {
        dispatch(setGistData(response));
    }
};

export const updateNotePadAction = params => async (dispatch) => {
    const response = await apiCall(`/gists/${params.gist_id}`, 'PATCH', params)
    if (typeof response === 'object' && response && !('error' in response)) {
        dispatch(setGistData(response));
    }
};

export const createNotePadAction = params => async (dispatch) => {
    const response = await apiCall(`/gists`, 'POST', params)
    if (typeof response === 'object' && response && !('error' in response)) {
        dispatch(setGistData(response));
    }
};

export const deleteNotePadAction = gist_id => async (dispatch) => {
    const response = await apiCall(`/gists/${gist_id}`, 'DELETE', {gist_id})
    if (typeof response === 'object' && response && response.status === 204) {
        dispatch(deleteGistData(gist_id));
    }
};