import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeSlice from '@/slices/themeSlice';
import inquirySlice from '@/slices/inquirySlice';

const rootReducer = combineReducers({
	theme: themeSlice,
	inquiry: inquirySlice
});

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
