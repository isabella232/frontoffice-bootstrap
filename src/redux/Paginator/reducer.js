import { completeReducer, onReadValue, createReducer, onSpreadValue } from 'redux-recompose';

import { actions } from './actions';
import { CURRENT_PAGE, COUNT, TOTAL_COUNT, TOTAL_PAGES, NEXT_PAGE } from './constants';

const initialState = {
  [CURRENT_PAGE]: 1,
  [COUNT]: 1,
  [TOTAL_COUNT]: 1,
  [TOTAL_PAGES]: 1,
  [NEXT_PAGE]: null
};

const reducerDescription = {
  primaryActions: [],
  override: {
    [actions.SET_CURRENT_PAGE]: onReadValue(),
    [actions.SET_PAGING_OPTIONS]: onSpreadValue()
  }
};

export default createReducer(initialState, completeReducer(reducerDescription));
