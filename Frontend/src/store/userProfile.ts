import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userImage: ''
}

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState, 
    reducers: {

    }
});


// const uploadUserProfile = createAsyncThunk<void, >