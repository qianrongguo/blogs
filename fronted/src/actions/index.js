export const SELECT_DELETE = 'SELECT_DELETE'
export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'
export const DELETE_SET_SUCCESS = 'DELETE_SET_SUCCESS'
export const ASYNC_START = 'ASYNC_START'
export const ASYNC_END = 'ASYNC_END'

// export const ARTICLE_SUBMITTED = 'ARTICLE_SUBMITTED'
export const UPDATE_FIELD_EDITOR = 'UPDATE_FIELD_EDITOR'
export const EDITOR_PAGE_LOADED = 'EDITOR_PAGE_LOADED'
// export const EDITOR_PAGE_UNLOADED = 'EDITOR_PAGE_UNLOADED'


//点击选择删除
export const select_delete =() => {
    return {
        type:SELECT_DELETE,

    }
}

//请求数据
export const request_blogs = () => {
    return {
        type: REQUEST_BLOGS,
    }
}
//接受数据
export const receive_blogs = (response) => {
    return {
        type: RECEIVE_BLOGS,
        response: response
    }
}

//主要是用来加载数据的
export const fetchBlog = () => dispatch => {
//请求数据时在redux上设置属性节点
    dispatch(request_blogs())
    fetch('http://localhost:3000/blogs')
        .then(response => response.json())
        .then(response => {
            dispatch(receive_blogs(response))
        })
}

//删除数据  1，select_delete执行删除
export const fetchBlogdelete = (id) => dispatch => {
    dispatch(select_delete())
    fetch(`http://localhost:3000/blogs/${id}`, {method: 'DELETE'})
        .then(() => {
            // 2，再次加载数据
            dispatch(fetchBlog())
        })
}

//开始
export const async_start = (id)  => {
    return {
        type:ASYNC_START,
        id
    }
}
//获取结束
export const async_end = (id)  => {
    return {
        type:ASYNC_END,
        id
    }
}

export const onLoad = payload =>dispatch =>{
    return dispatch({type: EDITOR_PAGE_LOADED, payload})
}

export const onUpdateField = (key,value) =>dispatch=> {
    return dispatch({
        type: UPDATE_FIELD_EDITOR, key, value
    })
}



//根据id获取文章
export const fetchEdit = (id) => dispatch => {
    dispatch(request_blogs())
    fetch(`http://localhost:3000/blogs/${id}`)
        .then(response => response.json())
        .then((response) => {
            console.log(response, '+++++++++++')
            dispatch(receive_blogs(response))
        })
}


