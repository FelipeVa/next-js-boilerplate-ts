import {Action, configureStore, ThunkAction,} from '@reduxjs/toolkit';
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist';
import rootReducer, {persistRootConfig, RootState} from '@/store/reducers';
import {createWrapper} from 'next-redux-wrapper';

const persistedReducer = persistReducer<RootState>(persistRootConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const makeStore = () => store;

export const appStore = makeStore()

/**
 * Store types for Hooks
 */
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
  >;
export type AppDispatch = ReturnType<AppStore['dispatch']>;

export const wrapper = createWrapper<AppStore>(makeStore);
export const persistor = persistStore(appStore);
