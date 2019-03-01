import React, {Component} from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import {fetchEdit, onLoad, onSubmit, onUpdateField, onUnload} from "../actions/blog";
import {updateField,createField} from '../actions'
import {connect} from 'react-redux';


let mapStateToProps = state => {
    console.log(state.editor.title, '5555')
    return {
        title: state.editor.title
    }
}


class Edit extends Component {

    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        const updateFieldEvent =
            key => ev => dispatch(onUpdateField(key, ev.target.value));
        //修改标题
        this.changeTitle = updateFieldEvent('title');
        //提交
        this.submitForm = ev => {
            debugger;
            ev.preventDefault();
            const title = {
                title: this.props.title
            };
            let slug = this.props.match.params.slug;
            //这里将修改的数据提交上去
            let Promise = slug ? updateField(title, slug) : createField(title);
            dispatch(onSubmit(Promise))
        }
    }


    componentWillReceiveProps(nextProps) {
        console.log(nextProps, '444444444');
        const {dispatch} = this.props;
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            if (nextProps.match.params.slug) {
                let slug = this.props.match.params.slug;
                return dispatch(onLoad(fetchEdit(slug)));
            }
        }
        dispatch(onLoad(null));
    }

    componentWillMount() {
        let slug = this.props.match.params.slug;
        const {dispatch} = this.props;
        if (slug) {
            return dispatch(onLoad(fetchEdit(slug)))
        }
        dispatch(onUnload(null))
    }

    componentWillUnmount(){
        const {dispatch} = this.props;
        dispatch(onUnload())
    }


    render() {

        return (
            <div>
                <form>
                    <fieldset>
                        <fieldset>
                            <input
                                placeholder="Article Title"
                                value={this.props.title}
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
