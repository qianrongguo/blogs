import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {selectedDelete,fetchBlog,fetchBlogs} from "../actions";

import Blog from '../components/Blogs'

class App extends Component {

    render() {
        return (
            <div>
                <Blog />
            </div>)
    }
}



export default App
