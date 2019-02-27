import React, {Component} from 'react'
import {ConnectedRouter} from 'connected-react-router'
import {Route, Switch} from 'react-router'
import Edit from "./components/Edit";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Login from "./components/Login";
import agent from './agent';
import {connect} from 'react-redux';
import {onLoad, onRedirect} from "./actions/app";
import {push} from 'react-router-redux';


const mapStateToProps = state => {
    console.log(state.signup.token, 'RRRRRRRRR');
    return state
}

const routes = (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Blogs}/>
            <Route path="/edit/:slug" component={Edit}/>
            <Route path="/edit" component={Edit}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </div>
);


class App extends Component {
    componentWillReceiveProps(nextProps){
        console.log(nextProps,'yyyyyyyyyyyyy')
    }

    componentWillMount() {
        debugger;
        const {dispatch} = this.props;
        const token = window.sessionStorage.getItem('TOKEN')
        if (token) {
            agent.setToken(token);
        }

        dispatch(onLoad(token ? `http://localhost:3001` : null, token))
    }

    render() {
        const {history} = this.props;
        return (
            <div>
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </div>
        )
    }
}


export default connect(mapStateToProps)(App)

