import React, {Component} from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import Edit from "./Edit";
import Blog from "./Blogs";

class Header extends Component{
    render(){
        return (
            <div>
                <ul>
                    <li><Link to='/'>blogs</Link></li>
                    <li><Link to='/edit'>New Post</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header
