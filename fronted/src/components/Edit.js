import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {onSubmit, request_blogs, RECEIVE_BLOGS, UPDATE_FIELD_EDITOR, EDITOR_PAGE_LOADED, fetchEdit} from "../actions";
import {connect} from 'react-redux';


let mapStateToProps = state => {
    console.log(state.Blog.blog, '44444')
    return {
        title: state.Blog.blog
    }
}

// let mapDispatchToProps = dispatch => ({
//     onLoad: payload =>
//         dispatch({type: EDITOR_PAGE_LOADED, payload}),
//     onUpdateField: (key, value) =>
//         dispatch({type: UPDATE_FIELD_EDITOR, key, value})
// })


class Edit extends Component {

    constructor(props) {
        super(props)
    }


    componentWillMount() {
        let slug = this.props.match.params.slug;
        const {dispatch} = this.props;
        if (slug) {
            return dispatch(fetchEdit(slug))
        }
    }

    // handleChnageTitle(event){
    //     console.log(event.target.value,'6666666666666')
    // this.setState({
    //     title:event.target.value
    // })
    // }

    // componentWillUnmount() {
    //     this.props.onLoad()
    // }

    render() {

        return (
            <div>
                <form>
                    <fieldset>
                        <fieldset>
                            <input
                                placeholder="Title"
                                value={this.props.title}
                                // onChange={this.changeTitle}
                            />
                        </fieldset>
                        <button
                            type="submit">
                            submit
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Edit)
