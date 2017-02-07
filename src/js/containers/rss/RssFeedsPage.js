import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';

import rssActionsCreators from "../../actions/rss";
import RssFeed from '../../components/rss/RssFeed';
import RssFeedForm from '../../components/rss/RssFeedForm';
import LoadingInd from '../../utils/LoadingInd';

class RssFeedsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onLoadEntries = this.onLoadEntries.bind(this);
  }

  componentWillMount() {
    this.props.rssActions.fetchFeeds();
  }

  onSubmit(formData) {
    this.props.rssActions.saveFeed(formData);
  }

  onLoadEntries(feedId) {
    this.props.rssActions.loadDraftEntries(feedId)
  }

  render() {
    const { loading, records } = this.props.rssFeeds;

    const entries = records.map((item) => {
      return <RssFeed key={item.id} {...item} onLoad={this.onLoadEntries} />
    });
    return (
      <div class="feeds">
        <h1>RSS Feeds</h1>
        <RssFeedForm onSubmit={this.onSubmit} />
        <div>
          <LoadingInd show={loading} />
        </div>
        <div>
          {entries}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  rssFeeds: state.rssFeeds
});
const mapDispatchToProps = (dispatch) => ({
  rssActions: bindActionCreators(rssActionsCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(RssFeedsPage);
