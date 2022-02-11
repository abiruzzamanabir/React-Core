import React from 'react';
import TextInput from './text-input';
import PropTypes from 'prop-types'

const Form = ({ values, handleChange, agrement, handleAgrement, handleSubmit, errors }) => {
    return (
        <form onSubmit={handleSubmit} >
            <TextInput
                name='name'
                type='name'
                label='Name'
                placeholder='Abir'
                value={values.name}
                error={errors.name}
                onChange={handleChange}
            />
            <TextInput
                name='email'
                type='email'
                label='Email'
                placeholder='Abir@email.com'
                value={values.email}
                error={errors.email}
                onChange={handleChange}
            />
            <TextInput
                name='password'
                type='password'
                label='Password'
                placeholder='********'
                value={values.password}
                error={errors.password}
                onChange={handleChange}
            />
            <TextInput
                name='birthDate'
                label='Birth Date'
                type='date'
                value={values.birthDate}
                error={errors.birthDate}
                onChange={handleChange}
            />
            <div className='form-group my-3'>
                <label className='me-3'>
                    <input
                        className='form-group'
                        type='radio' name='gender' value='male' onChange={handleChange} /> Male
                </label>
                <label className='me-3'>
                    <input
                        className='form-group'
                        type='radio' name='gender' value='female' onChange={handleChange} /> Female
                </label>
                <label className='me-3'>
                    <input className='form-group'
                        type='radio' name='gender' value='other' onChange={handleChange} /> Other
                </label>
                {errors.gender && <div className='invalid-feedback'>{errors.gender}</div>
                }
            </div>
            <div className='form-group'>
                <label>
                    <input className='me-2' type="checkbox"
                        name='agrement'
                        checked={agrement}
                        onChange={handleAgrement} /> I Agree
                </label>
            </div>
            <button className='btn btn-primary my-3' type="submit" disabled={!agrement}>Create User</button>
        </form>
    );
};

Form.prototype = {
    values: PropTypes.object.isRequired,
    agrement: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgrement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

export default Form;