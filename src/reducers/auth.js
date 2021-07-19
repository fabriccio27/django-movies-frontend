const defaultState = {
    isAuthenticated:false,
    user_info:{}
}

export default (state = defaultState, action) =>{
    switch (action.type){
        case "LOGIN":
            return {
                isAuthenticated:true,
                user_info:{...action.payload}
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                isAuthenticated:false,
                user_info:{}
            };
        default:
            return state;
    }
};