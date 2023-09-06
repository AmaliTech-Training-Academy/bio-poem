import { createSlice } from "@reduxjs/toolkit";

interface poemState {
    poems: []
    status: string
    showModal:boolean
}

const initialState:poemState = {
    poems: [],
    status: 'idle',
    showModal: false,

}

const poemSlice = createSlice({
    name: "poem",
    initialState,
    reducers:{
        setShowModal: (state)=>{
            state.showModal = !state.showModal
        }
    }
})

export const {setShowModal}  = poemSlice.actions
export default poemSlice.reducer