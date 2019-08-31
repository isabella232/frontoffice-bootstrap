import { createTypes } from 'redux-recompose';

import { CURRENT_PAGE } from './constants';

export const actions = createTypes(['SET_CURRENT_PAGE', 'SET_PAGING_OPTIONS'], '@@PAGINATOR');

export const actionCreators = {
  setCurrentPage: currentPage => ({
    type: actions.SET_CURRENT_PAGE,
    target: CURRENT_PAGE,
    payload: currentPage
  }),
  setPagingOptions: paging => ({
    type: actions.SET_PAGING_OPTIONS,
    payload: paging
  })
};
