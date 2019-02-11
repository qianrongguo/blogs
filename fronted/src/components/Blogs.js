import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Blog from "./Blog";
import {fetchBlog,fetchBlogdelete} from "../actions";
import {connect} from 'react-redux'


class Blogs extends Component {

    componentDidMount() {
        const {dispatch} = this.props
        //render渲染结束后加载数据库数据
        dispatch(fetchBlog())
    }

    //点击删除事件
    handleDelete(blogID) {
        // console.log(blogID,'uuuuuuuuuuu')
        const {dispatch} = this.props
        //运行fetchBlogdelete方法执行删除请求同步数据
        dispatch(fetchBlogdelete(blogID))
    }


    render() {
        return (
            <div>
                {this.props.isFetching ? (
                    <p>loding</p>
                ) : (
                    <div>
                        {this.props.response.map((data, index) => {
                            return <Blog data={data} key={index} delete={this.handleDelete.bind(this)}/>
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
