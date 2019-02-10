import React, {Component} from 'react'

export default class Blog extends Component {


    constructor(props) {
        super(props);
    }


    render() {
        return (

            <div>
                <div>
                    <h2>
                        {this.props.data.title}

                    </h2>
                    <button onClick={()=> this.props.action(this.props.data.id) }>Delete</button>
                </div>
            </div>)
    }


}
