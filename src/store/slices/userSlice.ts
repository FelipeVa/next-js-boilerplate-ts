import {
    createSlice,
} from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {},
});

const {actions, reducer} = userSlice;
export const {} = actions;
export default reducer;
