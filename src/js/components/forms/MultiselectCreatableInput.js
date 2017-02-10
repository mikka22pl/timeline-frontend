import React, { PropTypes } from 'react';
import { Creatable } from 'react-select';

export default class MultiselectCreatableInput extends React.Component {
  static displayName = 'MultiselectCreatableInput';

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.props.customOnChange(value); // {label... value}
    this.props.onChange(value);
  }

  render() {
      const fieldProps = _.omit(this.props, ['addEmptyOption', 'error', 'touched', 'tooltip', 'customOnChange']);
      return (
          <Creatable {...fieldProps} id={this.props.name} name={this.props.name} class=""
                                  onChange={this.handleChange}
                                  multi={true}
                                  onBlur={() => this.props.onBlur(this.props.value)}>
          </Creatable>
      );
  }
}

MultiselectCreatableInput.propTypes = {
    options: PropTypes.any.isRequired,
    name: PropTypes.string,
    label: PropTypes.string,
    customOnChange: PropTypes.func
};
