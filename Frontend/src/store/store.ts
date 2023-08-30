import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, } from "redux-persist"
import storage  from "redux-persist/lib/storage"
import formSlice from "./formSlice"
import searchSlice from "./searchSlice";

const persistConfig = {
    key: 'root',
    storage,
  }

    const rootReducer = combineReducers({
        form: formSlice,
        search: searchSlice,
    })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
});

export type RootState = ReturnType<typeof rootReducer>; 
