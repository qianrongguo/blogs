import React, {Component} from 'react'
import {ConnectedRouter} from 'connected-react-router'
import {Route, Switch} from 'react-router'
import Edit from "./components/Edit";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import agent from './agent';
import jwt_decode from 'jwt-decode';
import {connect} from 'react-redux';
import {onLoad, onRedirect} from "./actions/app";
import {push} from 'react-router-redux';
import {setCurrentUser} from './actions/signup'
import Logout from "./components/Logout";


const mapStateToProps = state => {
    return {
        state
    }
};

class Routes extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Blogs}/>
                    <Route path="/edit/:slug" component={Edit}/>
                    <Route path="/edit" component={Edit}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/logout" component={Logout}/>
                </Switch>
            </div>
        )
    }

}



class App extends Component {
    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
        if (nextProps.redirectTo) {
            dispatch(push(nextProps.redirectTo));
            dispatch(onRedirect())
        }
    }

    componentWillMount() {
        debugger;
        const {dispatch} = this.props;
        const token = localStorage.jwtToken;
        if (token){
            agent.setToken(token)
        }
        dispatch(onLoad(token ? `http://localhost:3001` : null, token))
    }

    render() {
        const {history} = this.props;
        return (
            <div>
                <ConnectedRouter history={history}>
                    <Routes/>
                </ConnectedRouter>
            </div>
        )
    }
}


export default connect(mapStateToProps)(App)

