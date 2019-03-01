import {EDITOR_PAGE_LOADED, ARTICLE_SUBMITTED, UPDATE_FIELD_EDITOR, EDITOR_PAGE_UNLOADED} from "../actions/blog";


const Edit = (state = {}, action) => {
    switch (action.type) {
        case EDITOR_PAGE_LOADED:
            return {
                ...state,
                title: action.payload ? action.payload.title.title : ''
            };
        case ARTICLE_SUBMITTED:
            return {
                ...state,
                redirectTo:'/'
            };
        case UPDATE_FIELD_EDITOR:
            return {...state, [action.key]: action.value};
        case EDITOR_PAGE_UNLOADED:
            return {};
        default:
            return state;
    }
    return state

}


export default Edit
