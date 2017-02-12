import React, { PropTypes } from 'react';
import _ from 'lodash';

class TagSelection extends React.Component {

  handleClick() {
    this.props.onClick && this.props.onClick({id: this.props.id, name: this.props.name});
  }
  render() {
    const { id, name } = this.props;
    return (
      <span onClick={this.handleClick.bind(this)}>
        {name}
      </span>
    );
  }
}

TagSelection.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default TagSelection;
