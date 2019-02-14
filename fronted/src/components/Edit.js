import React, {Component} from 'react'
import {Route,Link,Switch} from 'react-router-dom'


class Edit extends Component{
    render() {
        return (
            <div>
                <form>
                    title: <input type="text" value=" " placeholder="请填写你的标题"/>
                    content:<input type="text" value=" " placeholder="请填写你的标题"/>
                    <button>提交</button>
                </form>

            </div>
        )
    }
}


export default Edit
