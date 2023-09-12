import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface singlePoem {
    _id: string
    firstName: string
    adjectives: string,
    importantRelation: string,
    loves: string,
    feelings:string ,
    fears: string,
    accomplishments: string
    expectations: string
    residence: string
    lastName: string
    backgroundTheme: string
    user: string
    upvotes: number,
    downvotes: number,
    createdAt: string,
    updatedAt: string
    __v: number

}

interface RecentSearchState {
  recentSearches: singlePoem[];
}

const initialState: RecentSearchState = {
  recentSearches: [],
};

const recentSearchSlice = createSlice({
  name: 'recentSearch',
  initialState,
  reducers: {
    addRecentSearch: (state, action: PayloadAction<string>) => {
      if (!state.recentSearches.includes(action.payload)) {
        state.recentSearches.unshift(action.payload);
      }
    },
  },
});

export const { addRecentSearch } = recentSearchSlice.actions;
export default recentSearchSlice.reducer;
