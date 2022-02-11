import React from "react";

import SignupForm from "./signupForm";


class App extends React.Component {
    state = {
        users: []
    }
    createUser = user => {
        user.id = new Date().getTime().toString()
        this.setState({
            users: [...this.state.users, user]
        })
    }
    render() {
        return (
            <div>
                <SignupForm createUser={this.createUser} />
                <div>
                    <h3 className="my-3">All Registered Users</h3>
                    <ul className="list-group">
                        {this.state.users.map(user => (<li key={user.id} className='list-group-item'>Name: {user.name} | Email: {user.email} | Birth Date: {user.birthDate} | Gender: {user.gender}</li>))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;