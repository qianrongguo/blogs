import React from 'react'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router'
import Edit from "./components/Edit";
import Blogs from "./components/Blogs";
import Header from "./components/Header";

const routes = (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Blogs} />
            <Route path="/edit/:slug" component={Edit} />
            <Route path="/edit" component={Edit} />
        </Switch>
    </div>
)

const App = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            { routes }
        </ConnectedRouter>
    )
}



export default App

