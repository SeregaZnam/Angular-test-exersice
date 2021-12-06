import { IDataState, initialDataState } from '../state/data.state';
import { DataActions, DataActionsType } from '../actions/data.actions';

export const dataReducers = (
  state = initialDataState,
  action: DataActions
): IDataState => {
  switch (action.type) {
    case DataActionsType.GetDataSuccess: {
      return {
        ...state,
        data: action.payload,
      };
    }

    default:
      return state;
  }
};
