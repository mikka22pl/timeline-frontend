import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';

import timelineActionsCreators from "../actions/timeline";
import { data, tags as tagsData } from '../data';
import EntriesList from '../components/EntriesList';

class Timeline extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.timelineActions.fetchTimeline(this.props.params.tagId);
  }

  render() {
    const { tagId } = this.props.params;
    // const tagName = tagsData[tagId];
    // const entries = this.props.timeline.records.filter((item) => item.tags.indexOf(tagName) != -1);
    // console.log('entries', entries);
    return (
      <div class="timeline">
        <h1>Timeline</h1>
        <div>
          <p>Params: {tagId}</p>
        </div>
        <div>
          <EntriesList entries={this.props.timeline.records} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  timeline: state.timeline,
});
const mapDispatchToProps = (dispatch) => ({
  timelineActions: bindActionCreators(timelineActionsCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
