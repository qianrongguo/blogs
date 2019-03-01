import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from "react-router-redux";
import {logout} from "../actions/signup";
import {onRedirect} from "../actions/app"

const mapDispatchToProps = state => {
    return state.signup
};

class Logout extends Component {
    handleClickButton() {
        const {dispatch} = this.props;
        dispatch(logout())
    };

    componentWillReceiveProps(nextProps) {
            const {dispatch} = this.props;
            if (nextProps.redirectTo) {
                dispatch(push(nextProps.redirectTo));
            }
        }

    render() {
        return (
            <div>
                <button onClick={this.handleClickButton.bind(this)}>logout</button>
            </div>
        )
    }
}


export default connect(mapDispatchToProps)(Logout)
