import {FETCH_POSTS,NEW_POST,DELETE_POST} from '../actions/type';

const initialState = {
    items : [],
    item : {}
}

export default function PostReducers (state= initialState, action) {
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
        case DELETE_POST :

        default : 
         return state; 
    }
}