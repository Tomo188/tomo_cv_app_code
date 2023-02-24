import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {persistReducer,persistStore} from "redux-persist"
import thunk from "redux-thunk"
import reducer from "./user/user_slice"
const persistConfig={
    key:"root",
    storage
}
const persistedReducer=persistReducer(persistConfig,reducer)
export const store = configureStore({
    reducer:persistedReducer,
    middleware:[thunk],

})
export const persistStor=persistStore(store)
