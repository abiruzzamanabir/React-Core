import React from 'react';
import Form from './form';
import PropTypes from 'prop-types';
const initValues = {
    name: '',
    email: '',
    password: '',
    birthDate: '',
    gender: '',
}
class SignupForm extends React.Component {

    state = {
        values: initValues,
        agrement: false,
        errors: {}
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    handleAgrement = event => {
        this.setState({
            agrement: event.target.checked
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const { isValid, errors } = this.validate();
        if (isValid) {
            this.props.createUser(this.state.values)
            event.target.reset()
            this.setState({
                values: initValues,
                agrement: false,
                errors:{}
            });
        }
        else {
            this.setState({ errors });
        }
    }

    validate=()=>{
        const errors= {};
        const { values: { name, email, password, birthDate, gender } } = this.state;
        
        if (!name) {
            errors.name='Please Provide Your Name.'
        }
        if (!email) {
            errors.email='Please Provide Your Email.'
        }
        if (!password) {
            errors.password='Please Provide Your Password.'
        }
        if (!birthDate) {
            errors.birthDate='Please Provide Your Birth Date.'
        }
        if (!gender) {
            errors.gender='Please Select Your Gender.'
        }

        return {
            errors,
            isValid:Object.keys(errors).length===0
        }
    }

    render() {
        return <div>
            <h1>Signup Form</h1>
            <Form
                values={this.state.values}
                agrement={this.state.agrement}
                errors={this.state.errors}
                handleChange={this.handleChange}
                handleAgrement={this.handleAgrement}
                handleSubmit={this.handleSubmit}
            />
        </div>
    }
}
SignupForm.propTypes = {
    createUser: PropTypes.func.isRequired,
};
export default SignupForm;