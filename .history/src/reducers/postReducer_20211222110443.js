import {FETCH_POSTS,NEW_POST} from '../actions/type';

const initialState = {
    items : [],
    item : {}
}

export default function PostRedu (state= initialState, action) {
    switch (action.type) {
        case FETCH_POSTS :
            console.log("all good");
            return {
                ...state,
                items : action.payload
            }
        case NEW_POST :
            return {
                ...state,
                item : action.payload
            }
        default : 
         return state; 
    }
}