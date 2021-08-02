import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import type {RootState} from '@/store/reducers';
import type {AppDispatch} from '@/store/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
