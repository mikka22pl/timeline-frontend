import React, { PropTypes } from 'react';
import { Link } from 'react-router';


class RssFeed extends React.Component {

  constructor(props) {
    super(props);
    this.loadDraftEntries = this.loadDraftEntries.bind(this);
  }

  loadDraftEntries() {
    console.log('feedId' + this.props.id);
    this.props.onLoad(this.props.id);
  }

  render() {
    const { id, name, category, url } = this.props;
    return (
      <div>
        {name} : {category}
        (
          <Link to={`rss/entries/${id}/1`}>Draft ({this.props.draftCount})</Link>,
          <Link to={`rss/entries/${id}`}>Accepted ({this.props.acceptedCount})</Link>
        ) : {url} :
        <Link to={`/articles/${id}`}>All articles</Link> |
        <Link onClick={this.loadDraftEntries}>Download</Link> {this.props.loadedCount}
      </div>
    )
  }
}
RssFeed.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  category: PropTypes.string,
  url: PropTypes.string,
  draftCount: PropTypes.number,
  acceptedCount: PropTypes.number,
  loadedCount: PropTypes.number
};
export default RssFeed;
