import { createSlice } from "@reduxjs/toolkit";

export type state = {
    page: number,
    total: number,
}

// type action = {
//     payload: number,
// }

const initialState: state = {
    page: 1,
    total: 4,
}

const formSlice = createSlice ({
    name: 'form',
    initialState,
    reducers: {
        forward: (state: state, )=>{
            if(state.page < state.total){
                state.page++;
            }
        },
        back: (state:state,)=>{
            if(state.page > 1){
                state.page--;
            }
        }
    }
})

export const { forward, back } = formSlice.actions
export default formSlice.reducer;