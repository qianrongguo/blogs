import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Blog from "../components/Blog";
import {fetchBlog,fetchBlogdelete} from "../actions";
import {connect} from 'react-redux'
import Edit from './Edit'


class Blogs extends Component {
    componentWillMount(){
        const {dispatch} = this.props
        //render渲染结束后加载数据库数据
        dispatch(fetchBlog())
    }

    //点击删除事件
    handleDelete(blogID) {
        const {dispatch} = this.props
        //运行fetchBlogdelete方法执行删除请求同步数据
        dispatch(fetchBlogdelete(blogID))
    }

    //修改数据事件
    handleModify(blogId) {
        fetch(`http://localhost:3000/blogs/${blogId}`, {method: 'PUT'})
            .then(response => {
                return response.url
            })
            .then((result) => {
                console.log(result, '+++++++++++')
            })
    }


    render(){
        return (
            <div>
                {this.props.posts.isFetching ? (
                    <p>loding</p>
                ) : (
                    <div>
                        {this.props.posts.response.map((data, index) => {
                            return <Blog data={data} key={index} delete={this.handleDelete.bind(this)} modify={this.handleModify.bind(this)}/>
                        })}
                    </div>
                )
                }
            </div>)
    }
}

const mapStateToProps = state => {
    return state
}


export default connect(mapStateToProps)(Blogs)
