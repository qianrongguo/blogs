import {SELECT_DELETE,REQUEST_BLOGS,RECEIVE_BLOGS} from '../actions'

const posts = (state={
    isFetching:true
},action) => {
    switch (action.type){
        case SELECT_DELETE:
            return {
                ...state,
                isFetching:false,
            }
        case REQUEST_BLOGS:
            return {
                ...state,
                isFetching:true
            }
        case RECEIVE_BLOGS:
            return {
                ...state,
                response:action.response,   //将response整合到this.props
                isFetching:false
            }
        default:
            return{
                ...state,
                isFetching:true
            }
    }
}



export default posts
