import { IDataState, initialDataState } from './data.state';

export interface IAppState {
  data: IDataState;
}

export const initialAppState: IAppState = {
  data: initialDataState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
