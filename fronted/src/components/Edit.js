import React, {Component} from 'react'


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

export default Edit
