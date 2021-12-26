import { useState } from 'react';
import './App.css';
import Form from  "./form";
import Posts from './api';

function App() {
  const [newpost,setnewpost]=useState(false);
  return (
    <div className="app">
      <Form setnewpost={setnewpost}/>
      <Posts newpost={newpost} newposthandler={setnewpost}/>
    </div>
  );
}

export default App;
