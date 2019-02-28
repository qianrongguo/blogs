import React, {Component} from 'react'
import {onChangeUsername,onChangePassword,onChangeRePassword,RegisterSbmit,register} from '../actions/signup'
import {connect} from 'react-redux';

const mapDispatchToProps = state =>{
    console.log('state',state.signup)
    return state.signup
}


class Signup extends Component{

    constructor(props){
        super(props);
        const {dispatch} = this.props;
        this.changeUsername = ev => dispatch(onChangeUsername(ev.target.value));
        this.changePassword = ev => dispatch(onChangePassword(ev.target.value));
        this.onChangeRePassword = ev => dispatch(onChangeRePassword(ev.target.value));
        this.submitForm  = ev => {
            const username = this.props.username;
            const password = this.props.password;
            const repassword = this.props.repassword;
            const data = {
                username:username,
                password:password,
                repassword:repassword
            };
            dispatch(register(RegisterSbmit(data)))
        }
    }


    render(){

        return (
            <div className="auth-page">
                <div className="container page">
                    <div className="row">

                        <div className="col-md-6 offset-md-3 col-xs-12">
                            <h1 className="text-xs-center">Sign Up</h1>

                            <form>
                            {/*<form >*/}
                                <fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="text"
                                            placeholder="Username"
                                            onChange={this.changeUsername} />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="Password"
                                             onChange={this.changePassword}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <input
                                            className="form-control form-control-lg"
                                            type="password"
                                            placeholder="repassword"
                                            onChange={this.onChangeRePassword} />
                                    </fieldset>

                                    <button
                                        type="submit"
                                        onClick={this.submitForm}
                                    >
                                        submit
                                    </button>

                                </fieldset>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapDispatchToProps)(Signup)
