import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Blog extends Component {
    render() {
        debugger
        return (

            <div>
                <div>
                    <h2>
                        {this.props.data.title}
                    </h2>
                    <button onClick={() => this.props.delete(this.props.data.id)}>Delete</button>
                </div>
            </div>)
    }

}



export default  Blog
