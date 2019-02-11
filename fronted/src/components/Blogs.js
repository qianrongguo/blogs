import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Blog from "./Blog";
import {fetchBlog, fetchBlogs} from "../actions";
import { connect } from 'react-redux'


class Blogs extends Component {
    static propTypes = {
        isFetching:PropTypes.bool.isRequired,
        datas:PropTypes.arrayOf.isRequired,
        handleDelete:PropTypes.func.isRequired
    }

    componentDidMount() {
        debugger
        const {dispatch,selectedDelete} = this.props
        dispatch(fetchBlog(selectedDelete))
        // fetch('http://localhost:3000/blogs')
        //     .then(response => response.json())
        //     .then(data => this.setState({datas: data, isFetching: false}));
    }



    handleDelete(blogID) {
        // console.log("------")
        // const baseUrl = "http://localhost:3000/blogs";
        // fetch(baseUrl + '/' + blogID, {
        //     method: 'delete'
        // }).then(response => {
        //     // console.log(response);
        //     fetch('http://localhost:3000/blogs')
        //         .then(response => response.json())
        //         .then(data => this.setState({datas: data, isFetching: false}));
        //     // this.setState({isFetching: false})
        // }).then(()=>{
        //     // this.setState({isDeleted: false})
        //
        // }).
        // catch(err => console.log(err))
        // const {fetchBlogs} = this.props
        const {dispatch} = this.props
        dispatch(fetchBlogs(blogID))
    }

    render() {
        // const {isFetching,datas,handleDelete} = this.props;
        debugger
        return (
        <div>
                {this.props.isFetching ? (
                    <p>loding</p>

                ) : (
                    <div>{this.props.datas.map((data, index) => {
                        return <Blog data={data} key={index} action={this.handleDelete.bind(this)}  />
                    })}</div>

                )}
            </div>)
    }
}

const mapStateToProps = state => {
    debugger

    return {
        datas:state,
        isFetching:true
    }
}


export default connect(mapStateToProps)(Blogs)
