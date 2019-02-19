import {SELECT_DELETE, REQUEST_BLOGS, RECEIVE_BLOGS, fetchBlog, EDITOR_PAGE_LOADED} from '../actions'
import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import editor from './editor';

const posts = (state = {
    isFetching: true
}, action) => {
    switch (action.type) {
        case SELECT_DELETE:
            return {
                ...state,
                isFetching: false,
            };
        case REQUEST_BLOGS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_BLOGS:
            return {
                ...state,
                response: action.response,   //将response整合到this.props
                isFetching: false
            };
        default:
            return {
                ...state,
                isFetching: true
            }
    }
};


//处理一篇文章   true标傲世不显示，false表示显示
const Blog = (state = {fetchBlog:true}, action) => {
    switch (action.type) {
        case REQUEST_BLOGS:
            return {
                ...state,
                fetchBlog:true
            };

        case RECEIVE_BLOGS:
            return {
                ...state,
                blog:action.response.title,
                fetchBlog:false
            }
        case EDITOR_PAGE_LOADED:
            debugger;
            return {
                ...state,
                title:action.response.title  //这里取值title
            }
        default:
            return state
    }
}

const rootReducer = (history) => combineReducers({
    posts: posts,
    Blog:Blog,
    router: connectRouter(history)
})


export default rootReducer
