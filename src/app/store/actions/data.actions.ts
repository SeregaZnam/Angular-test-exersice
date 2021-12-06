import { Action } from '@ngrx/store';

export enum DataActionsType {
  GetData = '[Data] Get Data',
  GetDataSuccess = '[Data] Get Data Success',
}

export class GetData implements Action {
  public readonly type = DataActionsType.GetData;
}

export class GetDataSuccess implements Action {
  public readonly type = DataActionsType.GetDataSuccess;
  constructor(public payload: unknown) {}
}

export type DataActions = GetData | GetDataSuccess;
