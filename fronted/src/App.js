import React,{Component} from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import Edit from "./components/Edit";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import Signup from "./components/Signup";


const routes = (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Blogs} />
            <Route path="/edit/:slug" component={Edit} />
            <Route path="/edit" component={Edit} />
            <Route path="/signup" component={Signup} />
        </Switch>
    </div>
);


class App extends Component{

    componentWillReceiveProps(nextProps) {
        debugger;
        console.log(nextProps, '444444444')

    }
    render(){
        const {history} = this.props
        return (
            <div>
                <ConnectedRouter history={history}>
                    {routes}
                </ConnectedRouter>
            </div>
        )
    }
}



export default App

