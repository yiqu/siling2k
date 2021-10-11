import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../auth/auth.reducer';
import { AuthUserState } from './app.state';


export interface AppState {
  myRouter?: RouterReducerState<any>,
  authUser: AuthUserState;
}


export const appReducers: ActionReducerMap<AppState> = {
  myRouter: routerReducer,
  authUser: authReducer
}
