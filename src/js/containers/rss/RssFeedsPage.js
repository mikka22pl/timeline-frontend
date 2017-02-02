import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';

import rssActionsCreators from "../../actions/rss";
import RssFeed from '../../components/rss/RssFeed';
import RssFeedForm from '../../components/rss/RssFeedForm';

class RssFeedsPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.rssActions.fetchFeeds();
  }

  onSubmit(formData) {
    console.log('formData', formData);
    this.props.rssActions.saveFeed(formData);
  }

  render() {
    // const tagName = tagsData[tagId];
    const entries = this.props.rssFeeds.records.map((item) => {
      return <RssFeed key={item.id} {...item} />
    });
    // console.log('entries', entries);
    return (
      <div class="feeds">
        <h1>RSS Feeds</h1>
        <RssFeedForm onSubmit={this.onSubmit} />
        <div>
          {entries}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  rssFeeds: state.rssFeeds,
});
const mapDispatchToProps = (dispatch) => ({
  rssActions: bindActionCreators(rssActionsCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(RssFeedsPage);
