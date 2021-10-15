import { combineReducers } from "redux";
import { fnameReducer } from "./fname/fname.reducer";
import { queueReducer } from "./queue/queue.reducer";

const rootReducer = combineReducers({
    fnames: fnameReducer,
    queues: queueReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;