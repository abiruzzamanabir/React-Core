import React from 'react';
import PropTypes from 'prop-types'
const TextInput = props => (
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <input
            className={props.error ? 'form-control is-invalid' : 'form-control'}
            type={props.type}
            name={props.name}
            id={props.name}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.name}
        />
        {props.error && <div className='invalid-feedback'>{props.error}</div>}
    </div>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
};
export default TextInput;