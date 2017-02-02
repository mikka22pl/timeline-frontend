import React from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {getFormValues, initialize as initializeActionCreator} from "redux-form";

import articleActionsCreators from "../actions/articles";
import tagsActionsCreators from '../actions/tags';
import ArticleForm from '../components/article/ArticleForm';
import { articleToWrite } from '../utils/ArticleConverter';

class ArticleEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.props.tagsActions.fetchTags();
    const { articleId } = this.props.params;
    if (articleId) {
      this.props.articleActions.fetchArticle(articleId);
    }
  }

  onSubmit(formData) {
    console.log('formData', formData);
    const postData = articleToWrite(formData);
    console.log('postData', postData);

    this.props.articleActions.saveArticle(postData)
      .then(() => this.props.initializeForm('template-edit', {}, true));

  //  this.props.articleActions.saveArticle(formData);
    /*this.props.contractActions.saveContract(formData, this.props.commissionRules)
        .then(resp => this.props.contractActions.fetchContract(resp.value.data.records[0]))
        .then(() => this.props.initializeForm('contract-details', this.props.contractDetails, true))
        .then(() => this.props.modalActions.showModalDialog(infoConfig(msg("messages.commission.contract.saveSuccessful"))))
        .catch(resp => this.props.showErrors('contract-details', resp.response.data));*/
  }

  render() {
    return (
      <div class="article-edit">
        <h2>Article Edit</h2>
        <p>{this.props.article.saving}</p>
        <ArticleForm
            onSubmit={this.onSubmit}
            initialValues={this.props.article.value}
            tagsOptionsData={this.props.tagsOptions.options} />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  article: state.article,
  tags: state.tags,
  tagsOptions: state.tagsOptions
});
const mapDispatchToProps = (dispatch) => ({
  articleActions: bindActionCreators(articleActionsCreators, dispatch),
  tagsActions: bindActionCreators(tagsActionsCreators, dispatch),
  initializeForm: bindActionCreators(initializeActionCreator, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditPage);
