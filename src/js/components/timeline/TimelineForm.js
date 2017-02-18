import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class TimelineForm extends React.Component {

  render() {
    const { handleSubmit, onSubmit, reset, pristine, submitting } = this.props;
    return (
      <form class="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label for="fn-title" class="col-sm-2 control-label">Name:</label>
          <div class="col-sm-10">
            <Field id="fn-title" name="name" component="input" type="text" className="form-control" />
          </div>
        </div>
        <div class="form-group">
          <label for="fn-descr" class="col-sm-2 control-label">Description:</label>
          <div class="col-sm-10">
            <Field id="fn-descr" name="descr" component="textarea" type="textarea" className="form-control" />
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

TimelineForm = reduxForm({
  form: 'timeline-form'
})(TimelineForm);

/*ArticleForm = connect(state => ({
  initialValues: articleTo2Read(state.entry.value)
}))(ArticleForm);*/

TimelineForm.propTypes = {
  onSubmit: PropTypes.func
};
/*
initialValues: PropTypes.shape({
  title: PropTypes.string,
  descr: PropTypes.string,
  link: PropTypes.string,
  date: PropTypes.date
})*/
export default TimelineForm;
