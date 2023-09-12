import { data } from './formSlice';
// import { payload } from './../components/FormSection';
// import { poems } from './../data';
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from './store';
import { Poem } from '../components/Carousel2';
import { setVote } from './voteSlice';

interface poemState {
    poems: []
    status: string
    enableModal:boolean
    loading: boolean
    poemData: []
    recentPoems: object
    singlePoem: Poem,
    popularPoem: [] 
    vote: boolean,
    voteResponse: string
}

const initialState: poemState = {
    poems: [],
    status: 'idle',
    enableModal: false,
    poemData: [],
    loading: false,
    recentPoems: {},
    singlePoem:[],
    popularPoem : [],
    vote: false,
    voteResponse: ''
}

type PoemData = {
    success: boolean;
    poems: data[]
}

export const getPopularPoems = createAsyncThunk<PoemData, void, object>('popularPoem/get', async () =>{
    try {
        const response = await axios.get('https://bio-poem.onrender.com/api/v1/poems/popular-poems')
        console.log('response',response.data);
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
})

export const getRecentPoems = createAsyncThunk<PoemData, void, object>('recentPoem/get', async (page) =>{
    try {
        const response = await axios.get(`https://bio-poem.onrender.com/api/v1/poems/recent-poem?page=${page || 1}`)
        console.log('response',response.data);
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
})

export const upvotePoem = createAsyncThunk ('upvotePoem/post', async(singlePoem: Poem)=>{
    const url = `https://bio-poem.onrender.com/api/v1/poems/${singlePoem._id}/upvote`;
      try {
        const response = await axios.post(url);
        console.log('uptake', response);
        return response.data
    } catch (error) {
      console.log(error);
      throw error;
    }
  })

  export const downvotePoem = createAsyncThunk ('downvotePoem/post', async(singlePoem: Poem)=>{
    const url = `https://bio-poem.onrender.com/api/v1/poems/${singlePoem._id}/downvote`;
    try {
      const response = await axios.post(url);
      console.log('downtake', response);
  } catch (error) {
    console.log(error);
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
        .addCase(getPopularPoems.pending, (state) => {
            state.loading = true
        })
        .addCase(getPopularPoems.fulfilled, (state,{payload}: PayloadAction<any>) =>{
            state.loading = false
            state.popularPoem = payload
        })
        .addCase(getPopularPoems.rejected, (state) =>{
            state.loading = false
        })

            .addCase(getRecentPoems.pending, (state) => {
                state.loading = true
            })
            .addCase(getRecentPoems.fulfilled, (state,{payload}: PayloadAction<any>) =>{
                state.loading = false
                state.recentPoems = payload
            })
            .addCase(getRecentPoems.rejected, (state) =>{
                state.loading = false
            })

            .addCase(upvotePoem.pending, (state) =>{
                state.vote = true
            })
            .addCase(upvotePoem.fulfilled, (state,{payload}: PayloadAction<any>) =>{
                state.vote = true
                state.voteResponse = payload
            })
            .addCase(upvotePoem.rejected, (state)=>{
                state.vote = false
            })
    },
})

export const {setShowModal, setPoemData,setPoemSingleData}  = poemSlice.actions
export default poemSlice.reducer
export const selectRecentPoems = (state: RootState) => state.poem.recentPoems
export const selectPopularPoems = (state: RootState) => state.poem.popularPoem