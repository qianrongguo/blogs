import {bindActionCreators} from 'redux';
export const REQUEST_BLOG = 'REQUEST_BLOG'
export const RECEIVE_BLOG = 'RECEIVE_BLOG'
export const ADD_TAG = 'ADD_TAG'
export const EDITOR_PAGE_LOADED = 'EDITOR_PAGE_LOADED'
export const REMOVE_TAG = 'REMOVE_TAG'
export const ARTICLE_SUBMITTED = 'ARTICLE_SUBMITTED'
export const EDITOR_PAGE_UNLOADED = 'EDITOR_PAGE_UNLOADED'
export const UPDATE_FIELD_EDITOR = 'UPDATE_FIELD_EDITOR'

//请求数据
export const request_blog = () => {
    return {
        type: REQUEST_BLOG,
    }
}

//根据id获取数据
export const receive_blog = (response) => {
    return {
        type: RECEIVE_BLOG,
        response: response
    }
}

export const onUpdateField = (key,value) =>{
    return {
        type: UPDATE_FIELD_EDITOR,
        key,
        value
    }
}

export const onLoad = (payload) =>{
    return {
        type: UPDATE_FIELD_EDITOR,
        payload
    }
}

export const onSubmit = (payload) => {
    return {type: ARTICLE_SUBMITTED, payload}
}

export const onUnload = (payload) => {
    return {type: EDITOR_PAGE_UNLOADED}
}


//根据id获取文章
export const fetchEdit = (id) => dispatch => {
    dispatch(request_blog())
    fetch(`http://localhost:3000/blogs/${id}`)
        .then(response => response.json())
        .then((response) => {
            console.log(response, '+++++++++++')
            dispatch(receive_blog(response))
        })
}




