import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, } from "redux-persist"
import storage  from "redux-persist/lib/storage"
import formSlice from "./formSlice"
import searchSlice from "./searchSlice";
import themeSlice from "./themeSlice";
import darkModeSlice from "./darkModeSlice";


const persistConfig = {
    key: 'root',
    storage,
  }

    const rootReducer = combineReducers({
        form: formSlice,
        search: searchSlice,
        theme: themeSlice,
        darkMode: darkModeSlice,
    })

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
});

export type RootState = ReturnType<typeof rootReducer>; 
