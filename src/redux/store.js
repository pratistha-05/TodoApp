import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import rootReducer from "./rootReducer";
import reducer from "./reducers/todoSlice";
import { serializer } from "../../metro.config";
import { PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key:'root',
    storage: AsyncStorage,
    blacklist:[],
    whitelist:['todo']
}

const persistReducers = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions:[REGISTER,REHYDRATE,PAUSE,PERSIST,PURGE]
            },
        }),
});

export const persistor = persistStore(store)

