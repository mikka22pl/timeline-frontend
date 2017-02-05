import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class RssFeed extends React.Component {

  render() {
    const { id, name, category, url } = this.props;
    return (
      <div>
        {name} : {category}
        (
          <Link to={`rss/entries/${id}/1`}>Draft</Link>,
          <Link to={`rss/entries/${id}`}>Accepted</Link>
        ) : {url}
      </div>
    )
  }
}

export default RssFeed;
