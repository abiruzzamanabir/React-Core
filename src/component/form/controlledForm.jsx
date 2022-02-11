import React from "react";

class ControlledForm extends React.Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        event.target.reset();
        this.setState({ name: '', email: '', password: '' });
    };
    render() {
        const {name, email, password}=this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-control m-2"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        className="form-control m-2"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={this.handleChange}
                    />
                    <input
                        className="form-control m-2"
                        type="password"
                        name="password"
                        placeholder="Enter Your PAssword"
                        value={password}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ControlledForm;