import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer} from "./slices";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer
});

export const setupStore = () => configureStore({
    reducer: rootReducer
});