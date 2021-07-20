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
    
    render(){

        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="logUsername"></label>
                        <input 
                            type="text" 
                            placeholder="Username" 
                            name="username" 
                            value={this.state.username}
                            onChange={this.handleOnChange}
                            id="logUsername"
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="logPassword"></label>
                        <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            value={this.state.password}
                            onChange={this.handleOnChange}
                            id="logPassword"
                            className="form-control"
                        />
                    </div>
                    <div className="login-btn-div"> 
                        <button type="submit" className="btn btn-primary login-btn"> Log In </button>
                    </div>
                </form>
                
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