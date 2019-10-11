const INITIAL_STATE = {
    user_logged: false,
    user: {
        email: '',
        contacts: []
    },
    active_chat: {
        email: '',
        _id: '',
        messages: []
    }
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'ACTION_USER_LOGIN':
            return {...state, user_logged: action.data.logged, user: action.data.user};
        case 'ACTION_USER_NEW_CONTACT':
            state = { ...state,  user: action.data.user };
            return state;
        case 'ACTION_CHANGE_ACTIVE_CHAT':
            state = { ...state, active_chat: action.data.active_chat };
            return state;
        default:
            return state;
    }
}   

export default userReducer;