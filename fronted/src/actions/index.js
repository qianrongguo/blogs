export const SELECT_DELETE = 'SELECT_DELETE'
export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'
export const DELETE_SET_SUCCESS = 'DELETE_SET_SUCCESS'

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
    // debugger;
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

