import {
    UPDATE_FIELD_AUTH,
    SET_CURRENT_USER,
    REREDIRECTDIRECT,
    ReceiveToken,
        LOGOUT} from "../actions/signup";
import {REDIRECT} from "../actions/app"

const defaultState = {
    appName: 'Conduit',
    token: null,
    viewChangeCounter: 0
};

const SignUp = (state=defaultState,action) => {
    switch (action.type){
        case UPDATE_FIELD_AUTH:
            return {
                ...state,
                [action.key]:action.value
            };

        case ReceiveToken:
            return {
                ...state,
                token: action.token.token,
                redirectTo:'/'
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                user:action.payload
            };
        case REDIRECT:
            return {
                ...state,
                redirectTo:null,
                user:null
            };
        case LOGOUT:
            return {
                ...state,
                redirectTo:'/',
                token:null

            };
        default:
            return state
    }

};

export default SignUp
