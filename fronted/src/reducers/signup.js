import {UPDATE_FIELD_AUTH,REGISTER} from "../actions/signup";


const signup = (state={},action) => {
    switch (action.type){
        case UPDATE_FIELD_AUTH:
            return {
                ...state,
                [action.key]:action.value
            }
        case REGISTER:
            return {
                ...state,
                data:action.username & action.password
            }
        default:
            return state
    }

}

export default signup
