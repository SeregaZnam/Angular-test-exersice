import { createSelector } from '@ngrx/store';
import { IDataState } from '../state/data.state';

const selectData = (state: IDataState) => state;

export const selectDataList = createSelector(
  selectData,
  (state: IDataState) => state.data
);
