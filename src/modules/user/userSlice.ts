import {
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';

export type User = {
    id?: number,
    name?: string,
};

interface initialStateInterface {
    token: string|null,
    user?: User,
}

const initialState: initialStateInterface = {
    token: null,
    user: {},
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
       setName: {
           reducer: (state, action: PayloadAction<User>) => {
               const {id, name} = action.payload;

               state.user = {
                   id: id,
                   name: name,
               }
           },
           prepare: (id: number, name: string) => {
               return {payload: {id, name}};
           },
       },
   },
   extraReducers: {},
});

const {actions, reducer} = userSlice;
export const {setName} = actions;
export default reducer;
