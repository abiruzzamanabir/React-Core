import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './text-input';
const Form = (props) => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name='name'
            label='Enter Your Name: '
            placeholder='Abiruzzaman Abir'
            value={props.values.name}
            onChange={props.handleChange}
        />
        <TextInput
            name='email'
            type='email'
            label='Enter Your Email: '
            placeholder='Abir@email.com'
            value={props.values.email}
            onChange={props.handleChange}
        />
        <TextInput
            name='password'
            type='password'
            label='Enter Your Password: '
            placeholder='********'
            value={props.values.password}
            onChange={props.handleChange}
        />

        <button type='submit'>Submit</button>
    </form>
);
Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
};
export default Form;