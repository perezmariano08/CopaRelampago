import { combineReducers, configureStore } from "@reduxjs/toolkit"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/lib/persistStore"
import storage from "redux-persist/lib/storage"
import notisReducer from "./Notis/notisSlice"

const reducers = combineReducers({
    notis: notisReducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["notis"]
}

//al persist se le pasa como segundo parametro los reducers que va a consumir, y los que se guardan en localStorage son los incluidos en la whitelist
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)