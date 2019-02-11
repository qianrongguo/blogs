import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Blog extends Component {

    render() {
        return (

            <div>
                <div>
                    <h2>
                        {this.props.data.title}

                    </h2>
                    <button onClick={() => this.props.action(this.props.data.id)}>Delete</button>
                </div>
            </div>)
    }

}

Blog.prototype = {
    data:PropTypes.string.isRequired,
    action:PropTypes.func.isRequired,
    id:PropTypes.number.isRequired

}

export default  Blog
