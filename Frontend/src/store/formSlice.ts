import { createSlice } from "@reduxjs/toolkit";
// import { payload } from '../components/FormSection'

export type data = [
    {
    fname: string},
    {
    adjectives: string
    },
    {
    relationship: string
    },
    {
    ideas: string
    },
    {
    feelings: string,
    },
    {
    fears: string
    },
    {
    accomplishments: string
    },
    {
    expectations: string
    },
    {
    residence: string
    },
    {
    lname: string,
    }
]

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
    answers: [
        {
            fname: ''
        },
        {
            adjectives: ''
        },
        {
            relationship: ''
        },
        {
            ideas: ''
        },
        {
            feelings: ''
        },
        {
            fears: ''
        },
        {
            accomplishments: ''
        },
        {
            expectations: ''
        },
        {
            residence: ''
        },
        {
            lname: '',
        }
    ]
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
        // getAnswers: (state:state, {payload}) => {
        // const { id, value } = payload;
        // const answerArr = state.answers.filter((answer) => Object.keys(answer)[0] === id)
        // answerArr[0][id] = value;

        // }, 
    }
})

export const { forward, back,  } = formSlice.actions
export default formSlice.reducer;