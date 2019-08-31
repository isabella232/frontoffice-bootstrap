import { createTypes, completeTypes } from 'redux-recompose';

import * as ConectorService from '~services/ConectorService';

export const actions = createTypes(completeTypes(['GET_RESOURCE'], []), '@@RESOURCE');

export const actionCreators = {
  getResource: data => ({
    type: actions.GET_RESOURCE,
    service: ConectorService.getDetail,
    payload: data,
    target: 'resource'
  })
};
