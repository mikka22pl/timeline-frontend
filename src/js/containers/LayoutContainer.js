import React from 'react';
import { Link } from 'react-router';

class LayoutContainer extends React.Component {
  static displayName = 'LayoutContainer';

  render() {
    return (
      <div class="pc">
        <div class="menu">
          <p>
            <Link to="/home">Home</Link> |
            <Link to="/article/form">Add article</Link> |
            <Link to="/rss/feeds">RSS Feeds</Link>
          </p>
        </div>
        <div class="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default LayoutContainer;
