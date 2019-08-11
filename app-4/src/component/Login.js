import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            Username: '',
            Password: '',
        }

    }

    handleUserNameChange = (event) => {
        this.setState({
            Username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            Password: event.target.value
        })
    }

    handleLogin = () => {
        alert(`Username: ${this.state.Username} Password: ${this.state.Password}`)
    }

    render(){
        return (
            <div>
            <input className='Username' onChange= {e => this.handleUserNameChange(this.state.Username)}></input>
            <input className='Password' onChange={this.props.Password}></input>
            <button onClick={this.handleLogin} >Login</button>
            </div>
        )
    }
}

export default Login;
