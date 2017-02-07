import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { renderMultiselectCreatableField, renderDateField } from '../forms/FormFields';

class ArticleForm extends React.Component {

  render() {
    const { handleSubmit, onSubmit, reset, pristine, submitting } = this.props;
    return (
      <form class="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label for="fn-title" class="col-sm-2 control-label">Title:</label>
          <div class="col-sm-10">
            <Field id="fn-title" name="title" component="input" type="text" className="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label for="fn-descr" class="col-sm-2 control-label">Description:</label>
          <div class="col-sm-10">
            <Field id="fn-descr" name="descr" component="textarea" type="textarea" className="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Category:</label>
          <div class="col-sm-10">
            <label><Field name="category" component="input" type="radio" value="world"/> World</label>
            <label><Field name="category" component="input" type="radio" value="europa"/> Europa</label>
            <label><Field name="category" component="input" type="radio" value="kraj"/> Kraj</label>
          </div>
        </div>
        <div class="form-group">
          <label for="fn-link" class="col-sm-2 control-label">Link:</label>
          <div class="col-sm-10">
            <Field id="fn-link" name="link" component="input" type="text" className="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label for="fn-tags" class="col-sm-2 control-label">Tags:</label>
          <div class="col-sm-10">
            <Field id="fn-tags" name="tags" component={renderMultiselectCreatableField}
                  type="text"
                  className="form-control"
                  options={this.props.tagsOptionsData} />
          </div>
        </div>
        <div class="form-group">
          <label for="fn-date" class="col-sm-2 control-label">Date:</label>
          <div class="col-sm-10">
            <Field id="fn-date" name="date" component={renderDateField} type="text" className="form-control" />
          </div>
        </div>
        <div class="form-group">
          <button type="submit" disabled={pristine || submitting} class="btn btn-primary">Submit</button>
          <button type="button" disabled={pristine || submitting} class="btn btn-default" onClick={reset}>Clear Values</button>
        </div>
      </form>
    );
  }
}

ArticleForm = reduxForm({
  form: 'article-form'
})(ArticleForm);

/*ArticleForm = connect(state => ({
  initialValues: articleTo2Read(state.entry.value)
}))(ArticleForm);*/

ArticleForm.propTypes = {
  onSubmit: PropTypes.func,
  tagsOptionsData: PropTypes.array
};
/*
initialValues: PropTypes.shape({
  title: PropTypes.string,
  descr: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.date
})*/
export default ArticleForm;
