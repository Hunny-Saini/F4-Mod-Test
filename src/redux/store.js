import { createStore, applyMiddleware, combineReducers } from "redux";
import postsReducer from "./reducer/postsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    post: postsReducer,
})

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;