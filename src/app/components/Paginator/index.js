import React, { Component } from 'react';
import { number, func, string } from 'prop-types';

import { DEFAULT_CURRENT_PAGE, DEFAULT_TOTAL_PAGES, PAGING_COMPONENTS, DEFAULT_MAX_PAGES } from './constants';

class Paginator extends Component {
  handleChangePage = newPage => this.props.onPageChange(newPage);

  render() {
    const { currentPage, totalPages, nextPage, paginatorClassName, maxPages } = this.props;

    return (
      !!totalPages && (
        <div className={`${paginatorClassName} self-end row center full-width`}>
          {PAGING_COMPONENTS.map(({ key, component: Action, className, text }) => (
            <Action
              key={key}
              type={key}
              totalPages={totalPages}
              onPageChange={this.handleChangePage}
              currentPage={currentPage}
              nextPage={nextPage}
              text={text}
              className={className}
              maxPages={maxPages}
            />
          ))}
        </div>
      )
    );
  }
}

Paginator.propTypes = {
  onPageChange: func.isRequired,
  currentPage: number,
  maxPages: number,
  nextPage: number,
  paginatorClassName: string,
  totalPages: number
};

Paginator.defaultProps = {
  currentPage: DEFAULT_CURRENT_PAGE,
  maxPages: DEFAULT_MAX_PAGES,
  paginatorClassName: '',
  totalPages: DEFAULT_TOTAL_PAGES
};

export default Paginator;
