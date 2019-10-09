const INITIAL_STATE = {
    user_logged: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'ACTION_USER_LOGIN':
            return {...state, user_logged: action.data};
        default:
            return state;
    }
}   

export default userReducer;