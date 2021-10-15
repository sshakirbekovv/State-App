import { FnameAction, FnameActionTypes } from "./fname.types";

interface FnameState {
    fname: string;
    fsize: number | null;
}

const defaultState = {
    fname: "",
    fsize: null,
}

export const fnameReducer = (state: FnameState = defaultState, action: FnameAction): FnameState => {
    switch(action.type) {
        case FnameActionTypes.GET_NAME:
            return {
                ...state,
                fname: action.payload,
        }; 
        case FnameActionTypes.GET_SIZE:
            return {
                ...state,
                fsize: action.payload,
        }; 
        default:
            return state;
    }
}