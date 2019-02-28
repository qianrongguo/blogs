import {UPDATE_FIELD_AUTH, REGISTER, ReceiveToken} from "../actions/signup";

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
                token: action.token,
                redirectTo:'/'
            };
        default:
            return state
    }

};

export default SignUp
