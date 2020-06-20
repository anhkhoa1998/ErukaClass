import { HttpError } from '../../core/http-error.model';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthAction } from '../action';

export interface AuthState {
  error: HttpError;
  pending: boolean;
}

export const initialState: AuthState = {
  error: null,
  pending: false,
};

export const reducer = createReducer(
  initialState,
  on(AuthAction.signIn, (state) => ({
      ...state,
      error: null,
      pending: true
    })
  ),

  on(AuthAction.signInSuccess, (state) => (
    {
      ...state,
      error: null,
      pending: false,
    }
  )),

  on(AuthAction.signInFail, (state, { error }) => ({
      ...state,
      pending: false,
      error,
    }
  ))
);

export function authReducer(state: AuthState, action: Action) {
  return reducer(state, action);
}
