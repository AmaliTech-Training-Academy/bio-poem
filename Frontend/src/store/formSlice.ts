import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { payload } from '../components/FormSection'
import { submitPoem } from "../submitPoem";

export type data = {
    "firstName":string,
    "adjectives": string,
    "importantRelation": string,
    "loves": string,
    "feelings": string,
    "fears": string,
    "accomplishments": string,
    "expectations": string,
    "residence": string,
    "lastName": string,
    "backgroundTheme": string,
}

export type state = {
    page: number,
    total: number,
    answers: data,
}

// type answer ={
//     id: string,
//     value: string,
// }




const initialState: state = {
    page: 1,
    total: 4,
    answers: {
        "firstName":"",
        "adjectives": "",
        "importantRelation": "",
        "loves": "",
        "feelings": "",
        "fears": "",
        "accomplishments": "",
        "expectations": "",
        "residence": "",
        "lastName": "",
        "backgroundTheme": "",
    }
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
        },
        updateAnswers:(state: state, action: PayloadAction<payload>)=>{
            const {id, answer} = action.payload;
            state.answers[id as keyof data] = answer;
        },
        selectTheme: (state: state, action: PayloadAction<{theme:string}>)=>{
            const {theme} = action.payload;
            state.answers = {
                ...state.answers,
                backgroundTheme: theme
            }
        },
        submitPoemAnswers: (state: state) => {
            state.page = 5;
            state.total = 5;
        },
        resetState: (state:state) => {
            state.page = 1;
            state.total = 4
            state.answers = {
                "firstName":"",
                "adjectives": "",
                "importantRelation": "",
                "loves": "",
                "feelings": "",
                "fears": "",
                "accomplishments": "",
                "expectations": "",
                "residence": "",
                "lastName": "",
                "backgroundTheme": "",
            }
        }
    }
})

export const submitAnswers = createAsyncThunk<void, data, {}>("answers/submitAnswers", async (answers:data) => {
    try {
        const response = await submitPoem(answers);
        console.log(response, answers);
        return response;
    } catch (error) {
        console.error(error)
        throw error
    }
})
export const { forward, back, updateAnswers, selectTheme, submitPoemAnswers, resetState } = formSlice.actions
export default formSlice.reducer;