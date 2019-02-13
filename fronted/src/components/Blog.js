import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route, Switch ,Link} from 'react-router-dom';
// import Edit from './Edit';


class Edit extends Component{
    render(){
        return (
            <div>
                <form>
                    title: <input type="text" value=" " placeholder="请填写你的标题"/>
                    content: <textarea>haha</textarea>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

class Blog extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>
                        {this.props.data.title}
                    </h2>
                    {/*<button onClick={() => this.props.delete(this.props.data.id)}>Delete</button>*/}
                    {/*<button onClick={() => this.props.modify(this.props.data.id)}>*/}
                        {/*<Link to="/edit">Edit</Link>*/}
                        {/*<Route path="/edit" component={Edit}/>*/}
                    {/*</button>*/}
                    <ul>
                        <li><Link to="/edit">edit</Link></li>
                    </ul>
                    <Route path="/edit" component={Edit}/>
                    {/*<Switch>*/}
                        {/*<Route exact path="/editor" component={Editor} >edit</Route>*/}
                    {/*</Switch>*/}

                </div>
            </div>
        )
    }

}


export default Blog
