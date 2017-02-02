import React, { PropTypes } from 'react';
import Select from 'react-select';
import _ from "lodash";

export default class MultiselectInput extends React.Component {
    static displayName = 'MultiselectInput';

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.props.onChange(value);
    }

    render() {
        const fieldProps = _.omit(this.props, ['addEmptyOption', 'error', 'touched', 'tooltip', 'customOnChange']);
        return (
            <Select {...fieldProps} id={this.props.name} name={this.props.name} class=""
                                    onChange={this.handleChange}
                                    multi={true}
                                    onBlur={() => this.props.onBlur(this.props.value)}>
            </Select>
        );
    }
}

MultiselectInput.propTypes = {
    options: PropTypes.any.isRequired,
    name: PropTypes.string,
    label: PropTypes.string
};
