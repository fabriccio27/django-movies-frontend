import React from "react";
import {connect} from 'react-redux';


class RegisterPage extends React.Component {
    state = {
        username: "",
        email:"",
        password: "",
        password2:""
    }
    handleOnChange = (e) => {
        e.persist();
        this.setState(() => ({
            [e.target.name]: e.target.value 
        }))
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
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
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        name="password2" 
                        value={this.state.password2}
                        onChange={this.handleOnChange}
                    />
                    <input 
                        type="email" 
                        placeholder="Email (optional)" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleOnChange}
                    />
                    <input type="submit" value="Register"/>
                </form>
                
            </div>
            
        )
    }
}

export default RegisterPage;