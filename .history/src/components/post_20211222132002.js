import React ,{Component, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect,useDispatch} from 'react-redux';
import { deletehPost, fetchPost } from '../actions/postAction';
import { useSelector } from 'react-redux';

// class Post extends Component {
//     componentWillMount(){
//         this.props.fetchPost();
//     }
//     componentWillReceiveProps(nextProps){
//         if(nextProps.newPost){
//             this.props.posts.unshift(nextProps.newPost)
//         }
//     }
//     render () {
//         const dispatch = useDispatch();
//         const handledelete = (id) =>{
//             return(
//             dispatch(deletehPost(id))
//             )
//         }
//         const postItems = this.props.posts.map(post=>{
//                return (<div key={post.id}>
//                     <h3>{post.title}</h3>
//                     <p>{post.body}</p>
//                     <button>Delete</button>
//                     <button>Edit</button>
//                 </div>)
//         }
//         );
//         return (
//         <div>
//                 <h1>posts</h1>
//                 <div>
//                     {postItems }
//                 </div>
//         </div>);
//     }
// }
// Post.propTypes = {
//     fetchPost : PropTypes.func.isRequired,
//     posts : PropTypes.array.isRequired,
//     newPost : PropTypes.object
// }
// const mapStateToProps = state => ({
//     posts: state.posts.items,
//     newPost : state.posts.item
// });
// export default connect (mapStateToProps,{fetchPost})(Post);


const Post =()=>  {

        const [eid,setEid] = useState(null);
        const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(fetchPost())
        },[])
        const mystate = useSelector((val)=>val.posts.items)
        const handledelete = (id,mystate) =>{
            return(
            dispatch(deletehPost(mystate,id))
            //  console.log(mystate)
            )
        }
        console.log(mystate)
        const postItems = mystate.map(post=>{
            return (<div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={()=>handledelete(post.id , mystate)}>Delete</button>
                    <button onClick={()=>handle}>Edit</button>
                </div>)
        }
        );
        return (
        <div>
                <h1>posts</h1>
                <div>
                    {postItems }
                </div>
        </div>);
    }
export default Post;
