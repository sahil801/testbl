import {FETCH_POSTS,NEW_POST,DELETE_POST, SET_EID} from './type';

export const fetchPost = () => (dispatch)=>{
        console.log("fetching");
        // fetch('https://jsonplaceholder.typicode.com/posts')
        fetch('data.json')
        .then(res=>res.json())
        .then(posts=> dispatch({
            type: FETCH_POSTS,
            payload : posts
        }))
}

export const createPost = (postData) => (dispatch)=>{
      {
            type: NEW_POST,
            payload : post
        }))
}

export const deletehPost = (my_state,id) => {
    console.log("fetching dellll");
    // fetch('https://jsonplaceholder.typicode.com/posts')
    return{
        type: DELETE_POST,
        payload : my_state.filter((data)=>data.id!==id) 
    }
}

export const seteid = (id) => {
    console.log("fetching dellll");
    // fetch('https://jsonplaceholder.typicode.com/posts')
    return{
        type: SET_EID,
        payload : id
    }
}
