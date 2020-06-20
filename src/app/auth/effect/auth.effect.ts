import { AuthService } from '../services';
import { Router } from '@angular/router';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { AuthAction } from '../action';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AuthEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
  ) {
  }
  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.signIn),
      exhaustMap((action) =>
        this.authService.signIn(action.signin).pipe(
          map((res: any) => {
            return AuthAction.signInSuccess({ token: res.tokenString });
          }),
          catchError((error) => of(AuthAction.signInFail({ error })))
        )
      )
    )
  );

  signInSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthAction.signInSuccess),
      tap( (action) => {
        this.authService.setToken(action.token);
        this.router.navigate([ '/workspace' ]);
      })
    )
  );
}
