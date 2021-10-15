import { File } from "../../types/file.types";
import { QueueAction, QueueActionTypes } from "./queue.types";


interface QueueState {
    id: number;
    status: string;
    cancel: boolean;
    uploading: File[];
    nextup: File[];
    completed: File[];
    incompleted: File[];
}

const defaultState = {
    id: Math.random(),
    status: "",
    cancel: false,
    uploading: [],
    nextup: [],
    completed: [],
    incompleted: []
}

export const queueReducer = (state: QueueState = defaultState, action: QueueAction): QueueState => {
    switch(action.type) {
        case QueueActionTypes.ID:
            return {
                ...state,
                id: action.payload,
        };
        case QueueActionTypes.UPLOADING:
            return {
                ...state,
                status: "uploading",
                nextup: [...state.nextup.slice(1, state.nextup.length)],
                uploading: [...state.uploading, action.payload],
        }; 
        case QueueActionTypes.NEXT_UP:
            return {
                ...state,
                status: "nextup",
                nextup: [...state.nextup, action.payload],
        }; 
        case QueueActionTypes.NEXT_UP_DELETE:
            return {
                ...state,
                nextup: state.nextup.filter((item: File) => item.id !== action.meta.id),
        }; 
        case QueueActionTypes.COMPLETED:
            return {
                ...state,
                status: "completed",
                uploading: [],
                completed: [...state.completed, action.payload],
        }; 
        case QueueActionTypes.INCOMPLETE_UPLOADS:
            return {
                ...state,
                status: "incomplete",
                cancel: true,
                uploading: [],
                incompleted: [...state.incompleted, action.payload],
        }; 
        default:
            return state;
    }
}