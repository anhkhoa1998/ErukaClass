import { createSelector, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState } from '@ngrx/router-store';

import { RouterStateModel } from '../reducer/router.model';
import { AppState } from '../reducer';

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateModel>
  >('router');

export const selectRouterParams = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateModel>) => state && state.state && state.state.params
);

export const selectRouterUrl = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateModel>) => state && state.state.url
);

export const selectRouterQueryParams = createSelector(
  selectRouterState,
  (state: RouterReducerState<RouterStateModel>) => state && state.state.queryParams
);
