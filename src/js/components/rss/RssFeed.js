import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class RssFeed extends React.Component {

  render() {
    return (
      <div>
        {this.props.name} : <Link to={`rss/entries/${this.props.id}`}>{this.props.category}</Link> : {this.props.url}
      </div>
    )
  }
}

export default RssFeed;
