import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';

import rssActionsCreators from "../../actions/rss";
import RssEntry from '../../components/rss/RssEntry';

class RssEntriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.onAccept = this.onAccept.bind(this);
  }

  componentWillMount() {
    this.props.rssActions.fetchEntries(this.props.params.feedId);
  }

  onAccept(entry) {
    this.props.rssActions.acceptDraftEntry(entry);
  }

  render() {
    // const tagName = tagsData[tagId];
    const entries = this.props.rssEntries.records.map((item, idx) => {
      return <RssEntry key={idx} {...item} onAccept={this.onAccept} />
    });
    // console.log('entries', entries);
    return (
      <div class="feeds">
        <h1>RSS Feeds</h1>
        <div>
          <ul>
            {entries}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  rssEntries: state.rssEntries,
});
const mapDispatchToProps = (dispatch) => ({
  rssActions: bindActionCreators(rssActionsCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(RssEntriesPage);
