import { completeReducer, createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  resource: {}
};

const reducerDescription = {
  primaryActions: [actions.GET_RESOURCE],
  override: {}
};

export default createReducer(initialState, completeReducer(reducerDescription));
