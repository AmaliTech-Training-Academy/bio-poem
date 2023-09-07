import { createSlice } from "@reduxjs/toolkit";

interface poemState {
    poems: []
    status: string
    showModal:boolean
    poemData: []
}

const initialState:poemState = {
    poems: [],
    status: 'idle',
    showModal: false,
    poemData: [],

}

const poemSlice = createSlice({
    name: "poem",
    initialState,
    reducers:{
        setShowModal: (state)=>{
            state.showModal = !state.showModal
        },
        setPoemData: (state, action) => {
            state.poemData = action.payload;
          },
    }
})

export const {setShowModal, setPoemData}  = poemSlice.actions
export default poemSlice.reducer