import React, {Component} from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        appName:state.signup.appName,
        redirectTo: state.signup.redirectTo,
        currentUser: state.signup.username
    }
};

class Header extends Component{
    render(){
        if (this.props.currentUser){
            return (
                <div>
                    <ul>
                        <li><Link to='/'>blogs</Link></li>
                        <li><Link to='/edit'>New Post</Link></li>
                        <li><Link to='/settings'>Settings</Link></li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <ul>
                        <li><Link to='/'>blogs</Link></li>
                        <li><Link to='/login'>login</Link></li>
                        <li><Link to='/signup'>signup</Link></li>
                    </ul>
                </div>
            )
        }

    }
}

export default connect(mapStateToProps)(Header)
