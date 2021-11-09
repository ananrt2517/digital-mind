import {reducer} from "./reducer";

const rootReducer = reducer;

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;