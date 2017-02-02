import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { format } from '../../utils/DateTimeUtils';

class RssEntry extends React.Component {

  constructor(props) {
    super(props);
    this.handleAccept = this.handleAccept.bind(this);
  }

  handleAccept() {
    const entry = _.omit(this.props, ['onAccept']);
      console.log('accept it', entry);
    this.props.onAccept(entry);
  }

  render() {
    return (
      <li>
        <h4>{this.props.title} <small>{format(this.props.pubDate)}</small></h4>
        <p>url: {this.props.link}</p>
        {this.props.descr}
        <div class="pull-right"><Link onClick={this.handleAccept} class="btn btn-primary">Accept it</Link></div>
      </li>
    )
  }
}
RssEntry.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
  pubDate: PropTypes.any,
  onAccept: PropTypes.func.isRequired
}
export default RssEntry;
