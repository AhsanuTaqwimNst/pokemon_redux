import { combineReducers } from "redux";

const initialState=(state=[], action ) => {
    if (action === response.data) {
         return response.data
    }
    return state
}

export default combineReducers({
    initialState : initialState
})