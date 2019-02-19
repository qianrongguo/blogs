import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Route, Switch ,Link} from 'react-router-dom';



class Blog extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>
                        {this.props.data.title}
                    </h2>
                    <button onClick={() => this.props.delete(this.props.data.id)}>Delete</button>
                    <ul>
                        <li><Link to={`edit/${this.props.data.id}`}> edit </Link> </li>
                    </ul>
                </div>
            </div>
        )
    }

}


export default Blog
