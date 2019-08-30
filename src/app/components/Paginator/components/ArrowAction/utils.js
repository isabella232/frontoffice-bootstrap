import { NEXT, PREVIOUS, DEFAULT_CURRENT_PAGE } from '../../constants';

export const isDisabled = (type, currentPage, nextPage) => {
  const nextNoPage = type === NEXT && !nextPage;
  const previousNoPage = type === PREVIOUS && currentPage === DEFAULT_CURRENT_PAGE;
  return nextNoPage || previousNoPage;
};
