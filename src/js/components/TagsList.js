import React, { PropTypes } from 'react';

import Tag from './Tag';

class TagsList extends React.Component {

  render() {
    const { tags } = this.props;
    const list = (tags || []).map((tag, idx) => <li key={idx}><Tag {...tag} /></li>);

    return (
      <ul class="tags">
        {list}
      </ul>
    );
  }
}
TagsList.propTypes = {
  tags: PropTypes.array
}
export default TagsList;
