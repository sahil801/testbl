import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect,useDispatch} from 'react-redux';
import { deletehPost, fetchPost } from '../actions/postAction';

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
    
    return (
        
        return (
        <div>
                <h1>posts</h1>
                <div>
                    {postItems }
                </div>
        </div>);
    }
export default Post;
