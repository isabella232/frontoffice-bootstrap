import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { t } from 'i18next';
import { connect } from 'react-redux';
import { arrayOf, bool, any, number } from 'prop-types';

import styles from './styles.module.scss';

import { actionCreators as resourceActions } from '~redux/resource/actions';

import structure from '~constants/structure';

import Paginator from '~components/Paginator';

import Table from '~components/Table';

import { TABLE_HEADERS, BASE_COLUMNS, DEFAULT_PAGE, DEFAULT_LIMIT } from './constants';
import { parseColumns, parseList } from './utils';

class List extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.slice(1) === model.endpoint)
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      // TODO: send  current page
      this.props.getResource(this.state.data.endpoint, DEFAULT_PAGE, DEFAULT_LIMIT);
    }
  }

  render() {
    const { list, listError, loading, currentPage, totalPages, nextPage } = this.props;
    const columns = parseColumns({ columns: TABLE_HEADERS, baseColumns: BASE_COLUMNS });
    const bodies = parseList(list);
    return (
      <>
        <div className="row space-between middle form-header">
          <h1 className="title2">{t('List:componentList', { component: this.state.data.name })}</h1>
          <Link to={`${this.props.match.path}/new`} className={`${styles.link} button-primary`}>
            {t('List:create')}
          </Link>
        </div>
        <Table
          bodies={bodies}
          columns={columns}
          error={listError}
          errorMessage={t('Table:errorData')}
          loading={loading}
          config={{ styles: { headers: styles.headers } }}
        />
        <Paginator currentPage={currentPage} totalPages={totalPages} nextPage={nextPage} />
      </>
    );
  }
}

List.propTypes = {
  currentPage: number,
  list: arrayOf(any),
  listError: bool,
  loading: bool,
  nextPage: number,
  totalPages: number
};

const mapStateToProps = state => ({
  currentPage: state.paginator.currentPage,
  totalPages: state.paginator.totalPages,
  count: state.paginator.count,
  list: state.resource.page,
  totalCount: state.paginator.totalCount,
  nextPage: state.paginator.nextPage,
  listError: state.resource.pageError,
  loading: state.resource.pageLoading
});

const mapDispatchToProps = dispatch => ({
  getResource: (resource, page, limit) => dispatch(resourceActions.getResource(resource, page, limit))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
