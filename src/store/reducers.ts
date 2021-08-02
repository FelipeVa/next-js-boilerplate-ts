import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {PersistConfig} from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

/**
 * Slices
 */
import userSlice from '@/modules/user/userSlice';

/**
 *
 * @type {{storage, whitelist: *[], key: string}}
 */
export const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: storage,
  whitelist: [],
};

//TODO: Check this
const persistUser = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
}


const rootReducer = combineReducers({
  userReducer: persistReducer(persistUser, userSlice),
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
