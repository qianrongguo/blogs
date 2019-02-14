import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Blog from '../components/Blogs'
import Edit from '../components/Edit'
import Header from '../components/Header'
import { Route, Switch ,Link} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path='/' component={Blog}/>
                    <Route path='/edit' component={Edit}/>
                </Switch>

            </div>)
    }
}



export default App
