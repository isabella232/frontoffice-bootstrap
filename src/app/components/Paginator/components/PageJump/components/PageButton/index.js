import React, { Component } from 'react';
import { string, number, func } from 'prop-types';

import Button from '~components/Button';

class PageButton extends Component {
  handleClick = () => {
    const { children, onPageChange } = this.props;
    onPageChange(children);
  };

  render() {
    const { className, children } = this.props;
    return (
      <Button onClick={this.handleClick} className={className}>
        {children}
      </Button>
    );
  }
}

PageButton.propTypes = {
  children: number.isRequired,
  className: string.isRequired,
  onPageChange: func.isRequired
};

export default PageButton;
