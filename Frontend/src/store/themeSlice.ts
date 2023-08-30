import { createSlice } from "@reduxjs/toolkit";

export type state = {
theme: string,
};

type action = {
    payload: string
}

const initialState: state = {
    theme: 'none'
};

const themeSlice = createSlice({
    name: 'theme',
    initialState, 
    reducers: {
        changeThemeOption: (state: state, {payload}: action) => {
            if(state.theme !== payload){
                state.theme = payload
            }
        }
    }
})

export const {changeThemeOption} = themeSlice.actions;
export default themeSlice.reducer