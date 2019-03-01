import React,{Component} from 'react';
import { connect } from 'react-redux';
import {logout} from "../actions/signup";

const mapDispatchToProps = state => {
    return state
};

class Logout extends Component{
    handleClickButton(){
        const {dispatch} = this.props;
        dispatch(logout())
    };

    render(){
        return (
            <div>
                <button onClick={this.handleClickButton.bind(this)}>logout</button>
            </div>
        )
    }
}


export default connect(mapDispatchToProps)(Logout)
