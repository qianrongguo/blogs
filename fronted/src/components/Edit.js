import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {fetchEdit,onLoad,onSubmit,onUpdateField} from "../actions/blog";
import {updateField} from '../actions'
import {connect} from 'react-redux';


let mapStateToProps = state => {
    console.log(state.editor.title, '44444')
    return {
        title:state.editor.title
    }
}


class Edit extends Component {

    constructor(props) {
        super(props)
        const {dispatch} = this.props;
        const updateFieldEvent =
            key => ev => dispatch(onUpdateField(key, ev.target.value));
        //修改标题
        this.changeTitle = updateFieldEvent('title');
        //提交
        this.submitForm = ev => {
            ev.preventDefault()
            const title = {
                title:this.props.title
            };
            let slug = this.props.match.params.slug;
            let Promise = updateField(title,slug)
            dispatch(onSubmit(Promise))
        }
    }

    componentWillMount() {
        let slug = this.props.match.params.slug;
        const {dispatch} = this.props;
        if (slug) {
            return dispatch(onLoad(fetchEdit(slug)))
        }
    }

    componentWillReceiveProps(nextProps) {
        const {dispatch} = this.props;
            if (nextProps.match.params.slug) {
                let slug = this.props.match.params.slug;
                return dispatch(onLoad(fetchEdit(slug)));
            }
            dispatch(onLoad(null));
    }

    render() {

        return (
            <div>
                <form>
                    <fieldset>
                        <fieldset>
                            <input
                                placeholder="Title"
                                defaultValue={this.props.title}
                                ref='title'
                                onChange={this.changeTitle}
                            />
                        </fieldset>
                        <button
                            type="submit"
                            onClick={this.submitForm}
                        >
                            submit
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Edit)
