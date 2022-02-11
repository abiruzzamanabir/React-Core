import React from "react";



class UncontrolledForm extends React.Component {
    handleSubmit = event => {
        event.preventDefault();
        const data = {};
        data.name = event.target.name.value
        data.email = event.target.email.value
        data.password = event.target.password.value

        console.log(data);
        event.target.reset();
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        className="form-control m-2"
                        type="text"
                        name="name"
                        placeholder="Enter Your Name"
                    />
                    <input
                        className="form-control m-2"
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                    />
                    <input
                        className="form-control m-2"
                        type="password"
                        name="password"
                        placeholder="Enter Your PAssword"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default UncontrolledForm;
