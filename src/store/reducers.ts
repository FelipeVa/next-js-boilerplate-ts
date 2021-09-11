import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {PersistConfig, WebStorage} from 'redux-persist/es/types';
import storage from 'redux-persist/lib/storage';

/**
 * Slices
 */
import userSlice from '@/modules/user/userSlice';

/**
 *
 * @type {{storage, whitelist: *[], key: string}}
 */
interface PersistInterface {
  key: string;
  storage: WebStorage;
  whitelist?: string[];
  blacklist?: string[];
}

export const persistRootConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: storage,
  whitelist: [],
};

const persistUser: PersistInterface = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
}

const combineRedux = combineReducers({
  userReducer: persistReducer(persistUser, userSlice),
});

const rootReducer = combineRedux;

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
