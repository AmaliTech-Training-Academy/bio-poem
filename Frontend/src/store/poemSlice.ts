import { createSlice } from "@reduxjs/toolkit";

interface poemState {
    poems: []
    status: string
    enableModal:boolean
    poemData: []
}

const initialState:poemState = {
    poems: [],
    status: 'idle',
    enableModal: false,
    poemData: [],
}

const poemSlice = createSlice({
    name: "poem",
    initialState,
    reducers:{
        setShowModal: (state)=>{
            state.enableModal = !state.enableModal
        },
        setPoemData: (state, action) => {
            state.poemData = action.payload;
          },
    }
})

export const {setShowModal, setPoemData}  = poemSlice.actions
export default poemSlice.reducer