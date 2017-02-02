import React, { PropTypes } from 'react';
import { Link } from 'react-router';
// import _ from 'lodash';

import { tags as tagsData } from '../data';

class Tag extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const { id, name } = this.props;
    // const tagId = _.indexOf(tagsData, tagName);
    return (
      <span><Link to={`/timeline/${id}`}>{name}</Link></span>
    )
  }
}

Tag.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Tag;
