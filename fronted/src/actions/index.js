export const SELECT_DELETE = 'SELECT_DELETE'

export const selectedDelete = subreddit => ({
    type: SELECT_DELETE,
    subreddit
})


export const fetchBlog = subreddit => {
    fetch('http://localhost:3000/blogs')
        .then(data => data.json({datas: data, isFetching: false}))
        // .then(data => this.setState({datas: data, isFetching: false}));
}

export const fetchBlogs = (subrebbit,json) => {
        const baseUrl = "http://localhost:3000/blogs";
        fetch(baseUrl + '/' + `${subrebbit}`, {
            method: 'delete'
        }).then(response => {
            // dispatch(requestPosts(response))
            fetch('http://localhost:3000/blogs')
                .then(data => data.json({datas: data, isFetching: false}))
                // .then(data => this.setState({datas: data, isFetching: false}));
        }).then(()=>{
            // this.setState({isDeleted: false})
        }).
        catch(err => console.log(err))
}

