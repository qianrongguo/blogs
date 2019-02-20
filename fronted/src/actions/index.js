export const SELECT_DELETE = 'SELECT_DELETE'
export const REQUEST_BLOGS = 'REQUEST_BLOGS'
export const RECEIVE_BLOGS = 'RECEIVE_BLOGS'


//点击选择删除
export const select_delete = () => {
    return {
        type: SELECT_DELETE
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



//提交修改数据
export const updateField = (data, id)  => {
    fetch(`http://localhost:3000/blogs/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => console.log(response,'66666666'))
        .then(repsonse => console.log(repsonse, '___++++'))

}


//创建一个数据
export const createField = (data)  => {
    fetch(`http://localhost:3000/blogs/`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(response => console.log(response,'66666666'))
        .then(repsonse => console.log(repsonse, '___++++'))

}
