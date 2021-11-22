import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";

// ...rest es una teje para nombrar en el destructurado lo que nombre explicitamente, o sea, 
// ...rest es todo lo que no es isAuthenticated y component en props. (exact, path, history, etc)

export const PrivateRoute = ({isAuthenticated, component:Component, ...rest}) => (
    <Route {...rest} component={(props)=>{
        return isAuthenticated? 
        (
            <div>              
                <Component {...props}/>
            </div>
        ) 
        : (<Redirect to="/login"/>);
    }}/>
)

const mapStateToProps = (state)=>{
    return {
        isAuthenticated:state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(PrivateRoute);