import React ,{ Component, useState } from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../actions/postAction';







const PostForm =()=>{
  
  
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const onTitleChange =(e)
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
           <button>Edit</button>
        </form>
      </div>
    );
}

export default PostForm;
// class PostForm extends Component {
//       constructor(props) {
//         super(props);
//         this.state = {
//           title: '',
//           body: ''
//         };
    
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//       }
    
//       onChange(e) {
//         this.setState({ [e.target.name]: e.target.value });
//       }
    
//       onSubmit(e) {
//         e.preventDefault();
    
//         const post = {
//           title: this.state.title,
//           body: this.state.body
//         };
    
//         this.props.createPost(post);
//         console.log(this.props.posts)
//       }
  
//       render() {
       
//         return (
//           <div>
//             <h1>Add Post</h1>
//             <form onSubmit={this.onSubmit}>
//               <div>
//                 <label>Title: </label>
//                 <br />
//                 <input
//                   type="text"
//                   name="title"
//                   onChange={this.onChange}
//                   value={this.state.title}
//                 />
//               </div>
//               <br />
//               <div>
//                 <label>Body: </label>
//                 <br />
//                 <textarea
//                   name="body"
//                   onChange={this.onChange}
//                   value={this.state.body}
//                 />
//               </div>
//               <br />
//               <button type="submit">Submit</button>
//                <button>Edit</button>
//             </form>
//           </div>
//         );
//       }
//     }
// PostForm.propTypes = {
//   createPost : PropTypes.func.isRequired
// }
// export default connect(null,{createPost})(PostForm);
