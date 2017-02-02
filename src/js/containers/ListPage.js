import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';


import articleActionsCreators from "../actions/articles";
import EntriesList from '../components/EntriesList';
import { data } from '../data';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.articleActions.fetchArticles();
  }

  render() {
    return (
      <div>
        <h4>Facts</h4>
        <EntriesList entries={this.props.articles.records} />

      </div>
    );
  }
}
//<EntriesList entries={data} />
const mapStateToProps = (state) => ({
  articles: state.articles,
});
const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActionsCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
