import axios from "axios";
import { useEffect, useState } from "react";
function Posts(props){
    const[posts,setposts]=useState([]);
    const[emptyPost,setemptyPost]=useState(false);
    useEffect(()=>{
        axios.get('http://localhost:3001/api').then((response)=>{
        console.log(response.data);
        setposts(response.data);
        if(response.data.length === 0){
            setemptyPost(true);
            console.log(true);
        }
        else{
            setemptyPost(false);
        }
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
    if(props.newpost){
        axios.get('http://localhost:3001/api').then((response)=>{
        console.log(response.data);
        setposts(response.data);
        if(response.data.length === 0){
            setemptyPost(true);
            console.log(true);
            props.newposthandler(false);
        }
        else{
            setemptyPost(false);
        }
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className="posts">
            {emptyPost && <p>No posts available at this moment try adding some posts</p>}
            {posts.map(post=>(
                <div className="each">
                <h2>{post.title}</h2>
                <h5>{post.author}</h5>
                <h4>{post.content}</h4>
                </div>
            ))}
        </div>
    );
}
export default Posts;