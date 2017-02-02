import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class RssFeedForm extends React.Component {

  render() {
    const { handleSubmit, onSubmit, reset, pristine, submitting } = this.props;
    return (
      <div>
        <h4>Rss Feed Form</h4>
        <form class="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
          <div class="form-group">
            <label for="fn-distributor" class="col-sm-2 control-label">Distributor:</label>
            <div class="col-sm-10">
              <Field id="fn-distributor" name="name" component="input" type="text" className="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label for="fn-link" class="col-sm-2 control-label">Link:</label>
            <div class="col-sm-10">
              <Field id="fn-link" name="url" component="input" type="text" className="form-control" />
            </div>
          </div>
          <div class="form-group">
            <label for="fn-category" class="col-sm-2 control-label">Category:</label>
            <div class="col-sm-10">
              <Field id="fn-category" name="category" component="input" type="text" className="form-control" />
            </div>
          </div>
          <div class="form-group">
            <button type="submit" disabled={pristine || submitting} class="btn btn-primary">Submit</button>
            <button type="button" disabled={pristine || submitting} class="btn btn-default" onClick={reset}>Clear Values</button>
          </div>
        </form>
      </div>
    )
  }
}

RssFeedForm = reduxForm({
  form: 'rssfeed-form'
})(RssFeedForm);

RssFeedForm = connect(state => ({
  initialValues: {}
}))(RssFeedForm);

RssFeedForm.propTypes = {
  onSubmit: PropTypes.func
  //initialValues: PropTypes.Object
};

export default RssFeedForm;
