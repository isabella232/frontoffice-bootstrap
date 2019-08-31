import React, { Component } from 'react';

import styles from './styles.module.scss';

import structure from '~constants/structure';

import CreationContainer from './layout';

class Create extends Component {
  state = {
    data: {}
  };

  componentDidMount() {
    this.setState({
      data: structure.find(model => this.props.match.path.split('/')[1] === model.endpoint)
    });
  }

  // TODO integrate with api sauce
  handleSubmit = values => {};

  render() {
    return <CreationContainer modelData={this.state.data} onSubmit={this.handleSubmit} />;
  }
}
export default Create;
