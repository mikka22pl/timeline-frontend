import React from 'react';
import { Link } from 'react-router';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {getFormValues, initialize as initializeActionCreator} from "redux-form";
import _ from 'lodash';

import rssActionsCreators from "../../actions/rss";
import tagsActionsCreators from '../../actions/tags';
import RssEntry from '../../components/rss/RssEntry';
import ArticleForm from '../../components/article/ArticleForm';
import { articleToWrite, articleTo2Read } from '../../utils/ArticleConverter';
import { tagsToWrite } from '../../utils/TagsConverter';

class RssEntriesPage extends React.Component {
  constructor(props) {
    super(props);
    this.onAccept = this.onAccept.bind(this);
    this.onReject = this.onReject.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.selectTagsOnChange = this.selectTagsOnChange.bind(this);
  }

  componentWillMount() {
    const { draft, feedId } = this.props.params;
    if (draft) {
      console.log('draft entries', draft);
      this.props.rssActions.fetchDraftEntries(feedId);
    } else {
      console.log('..entries', draft);
      this.props.rssActions.fetchEntries(feedId);
    }
    this.props.tagsActions.fetchTags();
    this.props.rssActions.resetEntry();
  }

  onAccept(entry) {
    this.props.rssActions.acceptDraftEntry(entry);
  }

  onReject(entry) {
    this.props.rssActions.rejectDraftEntry(entry);
  }

  onEdit(entry) {
    // console.log('entry', entry);
    this.props.rssActions.openForm();
    const entryReadable = articleTo2Read(entry);
    this.props.rssActions.readForEdit(entryReadable)
    this.props.initializeForm('article-form', entryReadable, true);
  }

  onSubmit(formData) {
    // console.log('formData', formData);
    const postData = articleToWrite(formData);
    // console.log('postData', postData);

    this.props.rssActions.editEntry(postData)
      .then(() => this.props.rssActions.closeForm())
      .then(() => this.props.initializeForm('article-form', {}, true));
  }

  selectTagsOnChange(values) {
    if (values && values.length > 1) {
      this.props.tagsActions.fetchLinkedTags(tagsToWrite(values));
    }
  }

  render() {
    const isDraft = this.props.params.draft == '1';
    const entries = this.props.rssEntries.records.filter((i) => !i.category.id).map((item, idx) => {
      return <RssEntry key={idx} {...item} isDraft={isDraft} onAccept={this.onAccept} onReject={this.onReject} onEdit={this.onEdit}/>
    });
    const entries2 = this.props.rssEntries.records.filter((i) => i.category.id > 0).map((item, idx) => {
      return <RssEntry key={idx} {...item} isDraft={isDraft} onAccept={this.onAccept} onReject={this.onReject} onEdit={this.onEdit}/>
    })

    const linkedTags = this.props.linkedTags.records.map(tag => <span>{tag.name}</span>);

    return (
      <div class="feeds">
        <h1>RSS {isDraft ? 'Draft' : ''} Feeds</h1>
        <div class="tags-linked">
          {linkedTags}
        </div>
        {this.props.entry.openForm && <ArticleForm
            onSubmit={this.onSubmit}
            tagsOptionsData={this.props.tagsOptions.options}
            selectTagsOnChange={this.selectTagsOnChange}
            initializeForm={this.props.initializeForm} />}
        <div class="entries">
          <ul>
            {entries}
            {entries2}
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  rssEntries: state.rssEntries,
  entry: state.entry,
  tags: state.tags,
  tagsOptions: state.tagsOptions,
  linkedTags: state.linkedTags,
  router: ownProps.router
});
const mapDispatchToProps = (dispatch) => ({
  rssActions: bindActionCreators(rssActionsCreators, dispatch),
  tagsActions: bindActionCreators(tagsActionsCreators, dispatch),
  initializeForm: bindActionCreators(initializeActionCreator, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(RssEntriesPage);
