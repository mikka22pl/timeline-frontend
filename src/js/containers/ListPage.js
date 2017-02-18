import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from 'lodash';

import TimelineSearch from '../components/search/TimelineSearch';
import articleActionsCreators from "../actions/articles";
import tagsActionsCreators from '../actions/tags';
import EntriesList from '../components/EntriesList';
import { tagsToWrite } from '../utils/TagsConverter';

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentWillMount() {
    const polishLanguageId = 1;
    //this.props.articleActions.fetchArticles();
    this.props.tagsActions.fetchTags(polishLanguageId);
  }

  handleSearch(formData) {
    if (formData && formData.tags && formData.tags.length > 0) {
      this.props.articleActions.searchArticles(tagsToWrite(formData.tags));
    }
  }

  render() {
    return (
      <div>
        <h4>Facts</h4>
        <TimelineSearch tagsOptionsData={this.props.tagsOptions.options} onSubmit={this.handleSearch} />
        <EntriesList entries={this.props.articles.records} />

      </div>
    );
  }
}
//<EntriesList entries={data} />
const mapStateToProps = (state) => ({
  articles: state.articles,
  tagsOptions: state.tagsOptions,
});
const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActionsCreators, dispatch),
  tagsActions: bindActionCreators(tagsActionsCreators, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
