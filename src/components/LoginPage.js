import React from "react";
import {connect} from 'react-redux';
import {fetchUser, logUserOut} from '../actions/authActions';

class LoginPage extends React.Component {
    state = {
        username: "",
        password: ""
    }
    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        this.props.fetchUser(this.state)
    }
    handleLogOut = () =>{
        this.props.logUserOut()
    }
    render(){

        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input 
                        type="text" 
                        placeholder="Username" 
                        name="username" 
                        value={this.state.username}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.handleOnChange}
                    />
                    <input type="submit" value="Log In"/>
                </form>
                {/* <button onClick={this.handleLogOut}>Log Out</button> */}
            </div>
            
        )
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: (userInfo) => dispatch(fetchUser(userInfo)),
        logUserOut: () => dispatch(logUserOut())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)