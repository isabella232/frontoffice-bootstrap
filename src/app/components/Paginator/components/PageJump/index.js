import React from 'react';
import { number, string, func } from 'prop-types';
import classNames from 'classnames';

import styles from './styles.module.scss';
import PageButton from './components/PageButton';

function PageJump({ className, currentPage, onPageChange, totalPages }) {
  const pages = Array.from(Array(totalPages).keys());
  return (
    <div className={`row middle ${className} ${styles.pageOptions}`}>
      {pages.map(page => (
        <PageButton
          className={classNames('column center', styles.pageButton, {
            [styles.activePage]: currentPage === page + 1
          })}
          key={page}
          onPageChange={onPageChange}
        >
          {page + 1}
        </PageButton>
      ))}
    </div>
  );
}

PageJump.propTypes = {
  currentPage: number.isRequired,
  totalPages: number.isRequired,
  onPageChange: func.isRequired,
  className: string
};

export default PageJump;
