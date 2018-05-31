import { ExpressionEditorReduxState } from '../../types/ExpressionEditorTypes';
import * as types from "./actionTypes";

const initialState: ExpressionEditorReduxState = {
    displayText: "hit a button"
}

const reduce: any = (state: ExpressionEditorReduxState=initialState, action: any) => {
    switch (action.type) {
        case types.SET_TEXT:
            return {
                ...state,
                displayText: action.text
            }
        default:
            return state;
    }
};

export default reduce;

export function getText(state: ExpressionEditorReduxState): string {
    return "returnedText";//state.displayText;
}