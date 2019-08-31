import { completeReducer, createReducer } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  resource: {},
  page: []
};

const reducerDescription = {
  primaryActions: [actions.GET_RESOURCE, actions.CREATE_RESOURCE, actions.GET_RESOURCE_DETAIL],
  override: {}
};

export default createReducer(initialState, completeReducer(reducerDescription));
