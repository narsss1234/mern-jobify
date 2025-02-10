import React from 'react';

const Form = props => {
    return (
        <React.Fragment>
            <label htmlFor={props.htmlFor} className={props.labelClassName}>{props.label}</label>
            <input type={props.inputType} id={props.inputId} name={props.inputName} className={props.inputClassName} required />
        </React.Fragment>
    );
}

export default Form;