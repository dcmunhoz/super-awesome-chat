const INITIAL_STATE = {
    user_logged: false,
    user: {
        email: '',
        contacts: []
    }
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'ACTION_USER_LOGIN':
            return {...state, user_logged: action.data.logged, user: action.data.user};
        case 'ACTION_USER_NEW_CONTACT':
            state = { ...state,  user: action.data.user };
            return state;
        default:
            return state;
    }
}   

export default userReducer;