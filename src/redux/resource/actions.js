import { createTypes, completeTypes, withSuccess } from 'redux-recompose';
import { push } from 'connected-react-router';

import * as ConectorService from '~services/ConectorService';

import Routes from '~constants/routes';

export const actions = createTypes(
  completeTypes(['GET_RESOURCE', 'CREATE_RESOURCE', 'DELETE_RESOURCE'], []),
  '@@RESOURCE'
);

export const actionCreators = {
  getResource: data => ({
    type: actions.GET_RESOURCE,
    service: ConectorService.getDetail,
    payload: data,
    target: 'resource'
  }),
  createResource: data => ({
    type: actions.CREATE_RESOURCE,
    service: ConectorService.createResource,
    payload: data,
    injections: [
      withSuccess(dispatch => {
        dispatch(push(Routes.HOME));
      })
    ]
  }),
  deleteResource: data => ({
    type: actions.DELETE_RESOURCE,
    service: ConectorService.deleteResource,
    payload: data,
    injections: [
      withSuccess(dispatch => {
        dispatch(push(Routes.HOME));
      })
    ]
  })
};
