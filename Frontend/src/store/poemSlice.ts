import { data } from './formSlice';
// import { payload } from './../components/FormSection';
// import { poems } from './../data';
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from './store';
import { Poem } from '../components/Carousel2';

interface poemState {
    poems: []
    status: string
    enableModal:boolean
    loading: boolean
    poemData: []
    recentPoems: []
    singlePoem:Poem
}

const initialState: poemState = {
    poems: [],
    status: 'idle',
    enableModal: false,
    poemData: [],
    loading: false,
    recentPoems: [],
    singlePoem:[]
}

type PoemData = {
    success: boolean;
    poems: data[]
}

export const getRecentPoems = createAsyncThunk<PoemData, void, object>('recentPoem/get', async () =>{
    try {
        const response = await axios.get('https://bio-poem.onrender.com/api/v1/poems/recent-poem')
        return response.data
        console.log(response.data);
        
    } catch (error) {
        console.error(error);
        throw error;
    }
})

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
          setPoemSingleData:(state,{payload})=>{
            state.singlePoem = payload
          }
    },
    extraReducers(builder) {
        builder
            .addCase(getRecentPoems.pending, (state) => {
                state.loading = true
            })
            .addCase(getRecentPoems.fulfilled, (state,{payload}: PayloadAction<any>) =>{
                state.loading = false
                state.recentPoems = payload.recentPoems
            })
            .addCase(getRecentPoems.rejected, (state) =>{
                state.loading = false
            })
    },
})

export const {setShowModal, setPoemData,setPoemSingleData}  = poemSlice.actions
export default poemSlice.reducer
export const selectRecentPoems = (state: RootState) => state.poem.recentPoems