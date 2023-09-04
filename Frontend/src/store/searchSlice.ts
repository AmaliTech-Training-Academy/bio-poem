import { createSlice,} from "@reduxjs/toolkit"

interface SearchState{
    openSearch: boolean,
}
const initialState: SearchState = {
    openSearch: false,
}

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        setOpenSearch: (state)=>{
            state.openSearch = !state.openSearch
        },
        resetSearchState: (state) => {
            state.openSearch = initialState.openSearch;
        }
    }
})

export const {setOpenSearch, resetSearchState} = searchSlice.actions
export default searchSlice.reducer