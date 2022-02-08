import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer } from '../auth/auth.reducer';
import { AuthState } from '../auth/auth.state';
import { appMetaDataReducer } from '../meta/meta.reducer';
import { AppMetaDataState, APP_META_DATA_STATE } from '../meta/meta.state';


export interface AppState {
  myRouter?: RouterReducerState<any>,
  authUser: AuthState;
  [APP_META_DATA_STATE]: AppMetaDataState;
}


export const appReducers: ActionReducerMap<AppState> = {
  myRouter: routerReducer,
  authUser: authReducer,
  [APP_META_DATA_STATE]: appMetaDataReducer
}
