import React from "react";
import {FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";
import DateInput from "./DateInput";
// import TextInput from "../controls/TextInput";
// import SelectInput from "../controls/SelectInput";
// import CheckboxGroup from "../controls/CheckboxGroup";
import MultiselectInput from './MultiselectInput';
import MultiselectCreatableInput from './MultiselectCreatableInput';
// import DropdownInput from "../controls/DropdownInput";

/*export const renderHiddenField = ({input, label, tooltip, meta: {touched, error}, ...custom}) => (
    <input type="hidden" {...input} {...custom} />
);

export const renderTextField = ({input, label, tooltip, meta: {touched, error}, ...custom}) => (
    <TextInput name={name}
               label={label}
               tooltip={tooltip}
               placeholder=""
               error={error}
               touched={touched}
        {...input}
        {...custom}/>
);

export const renderSelectField = ({input, label, tooltip, meta: {touched, error}, ...custom}) => (
    <SelectInput name={name}
                 label={label}
                 tooltip={tooltip}
                 placeholder=""
                 error={error}
                 touched={touched}
        {...input}
        {...custom}/>
);*/

export const renderMultiselectField = ({input, label, tooltip, meta: {touched, error}, ...custom}) => (
    <MultiselectInput name={name}
                 label={label}
                 tooltip={tooltip}
                 placeholder=""
                 error={error}
                 touched={touched}
        {...input}
        {...custom}/>
);

export const renderMultiselectCreatableField = ({input, label, tooltip, meta: {touched, error}, ...custom}) => (
    <MultiselectCreatableInput name={name}
                 label={label}
                 tooltip={tooltip}
                 placeholder=""
                 error={error}
                 touched={touched}
        {...input}
        {...custom}/>
);

export const renderDateField = ({input, label, tooltip, meta: {touched, error}, options, ...custom}) => (
    <DateInput
        label={label}
        error={error}
        touched={touched}
        tooltip={tooltip}
        {...input}
        options={options}
        {...custom}/>
);

/*export const renderCheckboxGroup = ({input, label, tooltip, meta: {touched, error}, options, ...custom}) => (
    <CheckboxGroup
        label={label}
        error={error}
        tooltip={tooltip}
        touched={touched}
        {...input}
        options={options}
        {...custom}/>
);

export const renderDropdownInput = ({input, label, tooltip, meta: {touched, error}, options, ...custom}) => (
    <DropdownInput
        label={label}
        error={error}
        tooltip={tooltip}
        touched={touched}
        {...input}
        options={options}
        {...custom}/>
);*/
