import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';

import rssActionsCreators from "../actions/rss";
import EntriesList from '../components/EntriesList';
import { data } from '../data';

class AllArticlesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.rssActions.fetchEntries(this.props.params.feedId);
  }

  render() {
    return (
      <div>
        <h4>All articles</h4>
        <EntriesList entries={this.props.entries.records} />

      </div>
    );
  }
}
//<EntriesList entries={data} />
const mapStateToProps = (state) => ({
  entries: state.rssEntries,
});
const mapDispatchToProps = (dispatch) => ({
  rssActions: bindActionCreators(rssActionsCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(AllArticlesPage);
