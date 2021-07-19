import React from "react";
import {NavLink} from "react-router-dom";
import {logUserOut} from "../actions/authActions";
import {connect} from "react-redux";

export const Header = ({isAuthenticated, logUserOut}) => (
    <header>
        <nav>
            <NavLink to="/dashboard">Home</NavLink>
            {isAuthenticated && <NavLink to="/watchlist/:userId">Watchlist</NavLink>}
            {isAuthenticated && <button onClick={()=>logUserOut()}>Log Out</button>}
            {!isAuthenticated && <NavLink to="/login">Login</NavLink>}
            {!isAuthenticated && <NavLink to="/register">Register</NavLink>}
        </nav>
    </header>
    
)

const mapDispatchToProps = (dispatch)=>{
    return {
        logUserOut: ()=> dispatch(logUserOut())
    };
};

const mapStateToProps = (state) =>{
    return {
        isAuthenticated:state.auth.isAuthenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);