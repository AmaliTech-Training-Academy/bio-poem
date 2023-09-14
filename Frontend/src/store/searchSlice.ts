import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"
import { data } from "./formSlice"

interface SearchState {
    openSearch: boolean,
    loading: boolean,
    response: any | null
}

const initialState: SearchState = {
    openSearch: false,
    loading: false,
    response: null,
}

type PoemData = {
    success: boolean;
    poems: data[]
}

export const searchPoem = createAsyncThunk<PoemData, void, {}>('search/get', async () => {
    try {
        const response = await axios.get('https://bio-poem.onrender.com/api/v1/poems/all-poems')
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
})

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setOpenSearch: (state) => {
            state.openSearch = !state.openSearch
        },
        resetSearchState: (state) => {
            state.openSearch = initialState.openSearch;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchPoem.pending, (state) => {
                state.loading = true
            })
            .addCase(searchPoem.fulfilled, (state, {payload}: PayloadAction<any>) => {
                state.loading = false
                state.response = payload
            })
            .addCase(searchPoem.rejected, (state) => {
                state.loading = false
            })
    }
})

export const { setOpenSearch, resetSearchState } = searchSlice.actions
export default searchSlice.reducer
