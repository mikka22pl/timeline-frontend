import React, {PropTypes} from "react";
import DatePicker from "react-datepicker";

import { shiftUtcTime } from "../../utils/DateTimeUtils";
import { dataModelDateFormat, displayDateFormat } from '../../properties';

export default class DateInput extends React.PureComponent {
    static displayName = 'DateInput';

    constructor(props) {
        super(props);
        this.state = {
            touched: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange(date) {

        const value = date ? date.format(dataModelDateFormat) : null;

        //this is added to notify other component about change without overriding default redux-form on change
        this.props.customOnChange && this.props.customOnChange(value);

        this.props.onChange(value);
    }

    handleBlur() {
        this.setState({
            ...this.state,
            touched: true
        });
    }

    render() {
        const touched = (this.state.touched || this.props.touched);
        const selectedDate = this.props.selectedDate || shiftUtcTime(this.props.value);

        return (
          <DatePicker
              name={this.props.name}
              placeholderText={this.props.placeholder}
              dateFormat={displayDateFormat}
              todayButton="Dzisiaj"
              selected={selectedDate}
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              className={`form-control ${this.props.className}`}
              disabled={this.props.disabled}/>
        );
    }
}

DateInput.defaultProps = {
    initPopover: true,
    className: '',
    disabled: false
};

DateInput.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    customOnChange: PropTypes.func,
    value: PropTypes.any,
    errorText: PropTypes.any,
    className: PropTypes.any,
    selectedDate: PropTypes.object,
    initPopover: PropTypes.bool,
    disabled: PropTypes.bool
};
