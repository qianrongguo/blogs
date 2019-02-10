import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Blog extends Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <p>{this.props.data.title}</p>
            </div>)
    }


}
