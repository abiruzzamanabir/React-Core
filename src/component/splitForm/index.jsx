import React from 'react';
import Form from './form'




class SplitForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({ name: '', email: '', password: '' });
    };
    render() {
        return <Form
            values={this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
        />
    }
}
export default SplitForm;
