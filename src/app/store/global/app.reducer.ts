import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../auth/auth.reducer';
import { AuthState } from '../auth/auth.state';


export interface AppState {
  myRouter?: RouterReducerState<any>,
  authUser: AuthState;
}


export const appReducers: ActionReducerMap<AppState> = {
  myRouter: routerReducer,
  authUser: authReducer
}
