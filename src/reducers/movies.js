const movieDefaultState = {
    movie:{},
    ratings:[]
}

const movieReducer = (state=movieDefaultState, action)=>{
    switch(action.type){
        case "SET_MOVIE":
            return action.payload
        default:
            return state;
    }
}

