import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { userSlice } from './userSlice';
import { codeSlice } from './codeSlice';


const rootReducer = combineReducers({
    user: userSlice.reducer,
    code: codeSlice.reducer,

});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>; 
export type AppDispatch = typeof store.dispatch;

