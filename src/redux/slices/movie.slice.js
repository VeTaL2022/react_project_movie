import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movie: {},
    movieName: [],
    loading: false,
    error: null
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
            .addCase(getAll.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.movie = action.payload;
                state.loading = false;
            })
            .addCase(getAll.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })

            .addCase(getMovieByName.pending, (state) => {
                state.loading = true;
            })
            .addCase(getMovieByName.fulfilled, (state, action) => {
                state.movieName = action.payload;
                state.loading = false;
            })
            .addCase(getMovieByName.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {
    getAll,
    getMovieByName
};

export {movieReducer, movieActions};