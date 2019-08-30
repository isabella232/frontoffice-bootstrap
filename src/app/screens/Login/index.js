import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as authActions } from '~redux/Auth/actions';

import Login from './layout';

function LoginContainer({ onSubmit }) {
  return <Login onSubmit={onSubmit} />;
}

LoginContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(authActions.login(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
