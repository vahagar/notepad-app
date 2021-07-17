import {setListData} from "../reducers/notePadReducer";
import apiCall from "../../api/Https";

export const getNotePadListAction = () => async (dispatch) => {
    const response = await apiCall('/gists')
    if (Array.isArray(response)) {
        console.log(response)
        dispatch(setListData(response));
    }
};