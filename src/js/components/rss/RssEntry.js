import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { format } from '../../utils/DateTimeUtils';

class RssEntry extends React.Component {

  constructor(props) {
    super(props);
    this.handleAccept = this.handleAccept.bind(this);
    this.handleReject = this.handleReject.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleAccept() {
    const entry = _.omit(this.props, ['onAccept', 'onReject']);
    this.props.onAccept(entry);
  }

  handleReject() {
    const entry = _.omit(this.props, ['onAccept', 'onReject']);
    this.props.onReject(entry);
  }

  handleEdit() {
    this.props.onEdit(_.omit(this.props, ['onAccept', 'onReject', 'onEdit', 'isDraft']));
  }

  render() {
    const cat = this.props.category || {};
    const timelines = (this.props.timelines || []).map(t => <span>{t.name}</span>)
    return (
      <li>
        <h4>{this.props.title} <small>{format(this.props.pubDate)}</small></h4>
        <p>url: {this.props.link}</p>
        {this.props.descr}

          {this.props.isDraft && <div class="pull-right">
            <Link onClick={this.handleAccept} class="btn btn-primary">Accept it</Link>
            <Link onClick={this.handleReject} class="btn btn-default">Reject it</Link></div>}
          {!this.props.isDraft && <div class="pull-right"><Link onClick={this.handleEdit} class="btn btn-primary">Edit</Link></div>}
          <p>Category: <b>{cat.name}</b> | Timelines: {timelines}</p>
      </li>
    )
  }
}
RssEntry.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  descr: PropTypes.string,
  pubDate: PropTypes.any,
  isDraft: PropTypes.bool,
  onAccept: PropTypes.func.isRequired,
  onReject: PropTypes.func.isRequired,
  onEdit: PropTypes.func
}
export default RssEntry;
