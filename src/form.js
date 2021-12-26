import axios from "axios";
import { useState } from "react";
const Form = (props) => {
  const[author,setAuthor]=useState("");
  const[title,setTitle]=useState("");
  const[content,setContent]=useState("");  
  function AuthorHandler(event){
    setAuthor(event.target.value);
  }
  function Titlehandler(event){
    setTitle(event.target.value);
  }
  function ContentHandler(event){
    setContent(event.target.value);
  }
  function formSubmitHandler(event){
    event.preventDefault()
    if(author.length > 0 && title.length >0 && content.length>0){
      const post ={
        author:author,
        title:title,
        content:content
      }
        axios.post('http://localhost:3001/api',post).then((response)=>{
          console.log(response);
          setAuthor("");
          setContent("");
          setTitle("");
          props.setnewpost(true);
        }).catch(error=>{
          console.log(error);
        })
    }
    else{
      alert("Please fill all the Details");
    }
  }
  
  return (
    <form>
      <div className='all'>
        <div className='form'>
          <label htmlFor='name'>Title:</label>
          <input type='text' id='name' value={title} onChange={Titlehandler} />
        </div>
        <div className='form'>
          <label htmlFor='name'>Author:</label>
          <input type='text' id='name' value={author} onChange={AuthorHandler}/>
        </div>
     
      <div className='form'>
        <label htmlFor='name'>Content:</label>
        <input type='text' id='name' value={content} onChange={ContentHandler}/>
      </div>
      <div className='action'>
        <button onClick={formSubmitHandler}>Submit</button>
      </div>
      </div>
    </form>
  );
};

export default Form;