import {SELECT_DELETE, REQUEST_BLOGS, RECEIVE_BLOGS} from '../actions'
import {RECEIVE_BLOG,REQUEST_BLOG} from "../actions/blog";
import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import editor from './editor'

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
        case REQUEST_BLOG:
            return {
                ...state,
                fetchBlog:true
            };

        case RECEIVE_BLOG:
            return {
                ...state,
                blog:action.response.title,
                fetchBlog:false
            }

        default:
            return state
    }
}

const rootReducer = (history) => combineReducers({
    posts: posts,
    Blog:Blog,
    editor:editor,
    router: connectRouter(history)
})


export default rootReducer
