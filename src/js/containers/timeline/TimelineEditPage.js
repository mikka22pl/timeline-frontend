import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getFormValues, initialize as initializeActionCreator } from "redux-form";

import timelineActionsCreators from "../../actions/timeline";
import TimelineForm from '../../components/timeline/TimelineForm';
import TimelineTable from '../../components/timeline/TimelineTable';

class TimelineEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.timelineActions.fetchTimelines();
  }

  onSubmit(formData) {
    console.log('formData', formData);
    this.props.timelineActions.saveTimeline(formData)
      .then(() => this.props.initializeForm('timeline-form', {}, true));
  }

  render() {
    return (
      <div class="timeline-edit">
        <h2>Timeline Edit</h2>
        <TimelineForm onSubmit={this.onSubmit}/>
        <TimelineTable data={this.props.timelines}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  timeline: state.timeline,
  timelines: state.timelines.records
});
const mapDispatchToProps = (dispatch) => ({
  timelineActions: bindActionCreators(timelineActionsCreators, dispatch),
  initializeForm: bindActionCreators(initializeActionCreator, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(TimelineEditPage);
