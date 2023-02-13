import { register, logOut, logIn, fetchCurrentUser } from './authOperation';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
	user: { name: null, email: null },
	token: null,
	isLoggedIn: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: {
		[register.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[logIn.fulfilled](state, action) {
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isLoggedIn = true;
		},
		[logOut.fulfilled](state, action) {
			state.user = { name: null, email: null };
			state.token = null;
			state.isLoggedIn = false;
		},
		[fetchCurrentUser.fulfilled](state, action) {
			state.user = action.payload;
			state.isLoggedIn = true;
		},
	},
});


const persistConfig = {
	key: 'auth',
	storage,
	whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
