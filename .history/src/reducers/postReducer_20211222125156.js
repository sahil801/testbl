import {FETCH_POSTS,NEW_POST,DELETE_POST} from '../actions/type';

const initialState = {
    items : [],
    item : {},
    eid : null
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
            return {
                ...state,
                items : action.payload
            }
        case SET_EID:
            return {
                ...state,
                ei : action.payload
            }    

        default : 
         return state; 
    }
}