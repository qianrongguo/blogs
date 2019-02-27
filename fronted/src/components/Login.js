import React,{Component} from 'react';
import { connect } from 'react-redux';
import {UPDATE_FIELD_AUTH,saveToken,onChangeUsername,onChangePassword,fetchLogin} from "../actions/signup";
import {onUnload} from "../actions/blog";
import {onRedirect} from "../actions/app";
import {push} from "react-router-redux";


const mapStateToProps = state => {
    return state.signup
};

class Login extends Component{
    constructor(props){
        super(props);
        const {dispatch} = this.props;
        this.changeUsername = ev => dispatch(onChangeUsername(ev.target.value));
        this.changePassword = ev => dispatch(onChangePassword(ev.target.value));
        this.submitForm = (username,password) => ev => {
            debugger;
            ev.preventDefault();
            const data = {
                username,
                password
            };
            fetchLogin(data)
            // dispatch(fetchLogin(data))
        }
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
        if (nextProps.redirectTo) {
            dispatch(push(nextProps.redirectTo));
            dispatch(onRedirect())
        }

    }

    render(){
        const username = this.props.username;
        const password = this.props.password;
        return (
            <div>
                <form onSubmit={this.submitForm(username, password)}>
                    <fieldset>

                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="text"
                                placeholder="username"
                                value={username}
                                onChange={this.changeUsername} />
                        </fieldset>

                        <fieldset className="form-group">
                            <input
                                className="form-control form-control-lg"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.changePassword} />
                        </fieldset>

                        <button
                            type="submit"
                            // disabled={this.props.inProgress}
                        >
                            Sign in
                        </button>

                    </fieldset>
                </form>
            </div>
        )
    }

}


export default connect(mapStateToProps)(Login)
