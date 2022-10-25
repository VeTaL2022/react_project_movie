import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movie: {},
    movieName: [],
    page: null,
};
const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);

const getMovieByName = createAsyncThunk(
    'movieSlice/getMovieByName',
    async ({name}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieByName(name);
            return data.results;
        } catch (e) {
            rejectWithValue(e.response.data);
        }
    }
);

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.page = action.payload.page;
            })
            .addCase(getMovieByName.fulfilled, (state, action) => {
                state.movieName = action.payload;
            })
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getMovieByName
};

export {movieReducer, movieActions};