import * as types from "./actionTypes";

export function setText(newText: string): any{
    return (dispatch, getState) => {
        dispatch({type: types.SET_TEXT, text: newText});
    };
}