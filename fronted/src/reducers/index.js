import {SELECT_DELETE} from '../actions'

const posts = (state={
    isFetching:true
},action) => {
    switch (action.type){
        case SELECT_DELETE:
            return {
                ...state,
                isFetching:true
            }
        default:
            return{
                ...state,
                isFetching:true
            }
    }
}


const deleteSubreddit = (state={},action) => {
    switch (action.type){
        case SELECT_DELETE:
            return {...state,[action.subreddit]:posts(state[action.subreddit],action)}
        default:
            debugger
            return state
    }
}


export default deleteSubreddit
