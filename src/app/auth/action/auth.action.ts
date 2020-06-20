import { createAction, props } from '@ngrx/store';
import { SignIn } from '../models/auth.model';
import { HttpError } from '../../core/http-error.model';

export const signIn = createAction(
  '[Authentication] Sign in',
  props<{ signin: SignIn}>()
);

export const signInSuccess = createAction(
  '[Authentication] Sign in successfully',
  props<{ token: string }>()
);

export const signInFail = createAction(
  '[Authentication] Sign in failed',
  props<{ error: HttpError}>()
);

