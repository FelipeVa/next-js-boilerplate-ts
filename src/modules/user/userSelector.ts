import {RootState} from '@/store/reducers';

const user = (state: RootState) => state.userReducer.user;
