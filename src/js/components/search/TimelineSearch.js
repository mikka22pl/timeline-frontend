import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { renderMultiselectField } from '../forms/FormFields';

class TimelineSearch extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { handleSubmit, onSubmit, reset, pristine, submitting } = this.props;
    return (
      <div class="tl-search">
        <form class="form-inline" onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="form-group col-sm-8">
              <Field id="fn-tags" name="tags" component={renderMultiselectField}
                    type="text"
                    className="form-control"
                    options={this.props.tagsOptionsData}
                    customOnChange={this.props.selectTagsOnChange} />
            </div>
            <div class="form-group col-sm-2">
              <button type="submit" disabled={pristine || submitting} class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

TimelineSearch = reduxForm({
  form: 'timeline-search'
})(TimelineSearch);

TimelineSearch.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  tagsOptionsData: PropTypes.array.isRequired,
  selectTagsOnChange: PropTypes.func
};

export default TimelineSearch;
