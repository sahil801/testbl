import {FETCH_POSTS,NEW_POST,DELETE_POST,SET_EID} from '../actions/type';

const initialState = {
    items : [],
    item : {},
    eid : 25
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
                items : [action.payload , ...state]
            }
        case DELETE_POST :
            return {
                ...state,
                items : action.payload
            }
        case SET_EID:
            return {
                ...state,
                eid : action.payload
            }    

        default : 
         return state; 
    }
}