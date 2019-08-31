import React from 'react';
import classNames from 'classnames';
import { any, string } from 'prop-types';
import { Link } from 'react-router-dom';

import { actionType, columnsType, configType } from '~components/Table/propTypes';

import Cell from '~components/Table/components/Cell';

import styles from '~components/Table/styles.module.scss';

function Row({ action, config, columns, data, url }) {
  const { component: ActionComponent, props: actionComponentProps } = action;
  const { styles: configStyles = {} } = config;
  return (
    <div className={classNames('grid', styles.rowContainer, configStyles.rowContainer)}>
      <Link
        to={url}
        className={classNames('grid middle', styles.rowLink, configStyles.rowLink, {
          'm-right-2': ActionComponent
        })}
      >
        {Object.keys(columns).map(columnName => {
          const { component: CellComponent, parser: dataParser } = columns[columnName].cell || {};
          const cellData = dataParser?.(data[columnName]) || data[columnName] || null;
          return cellData ? (
            <Cell key={`${data.id}-${columnName}`} className={classNames(styles.cell, configStyles.cell)}>
              {CellComponent ? <CellComponent {...cellData} /> : cellData}
            </Cell>
          ) : null;
        })}
      </Link>
      {ActionComponent ? (
        <Cell key={`${data.id}-actions`} className={classNames(styles.cell, configStyles.cell)}>
          {ActionComponent ? <ActionComponent {...actionComponentProps} /> : null}
        </Cell>
      ) : null}
    </div>
  );
}

Row.propTypes = {
  action: actionType,
  columns: columnsType,
  config: configType,
  // eslint-disable-next-line react/forbid-prop-types
  data: any,
  url: string
};

Row.defaultProps = {
  action: {},
  config: {},
  url: ''
};

export default Row;
