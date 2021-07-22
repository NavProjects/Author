import React, {useState} from 'react'
import './App.css';
import {Router} from "@reach/router"
import Home from './components/HomeAuthor';
import Create from './components/CreateAuthor/CreateAuthor';
import EditAuthor from './components/EditAuthor/EditAuthor';

function App() {

  const [ authorName, setAuthorName ] = useState({
    name:""
  })

  const [ created, setCreated ] = useState(true)

  return (
    <div >
      <h1>Favorite Authors</h1>
      <Router>
        <Home path="/" authorName={authorName} setAuthorName={setAuthorName} created={created} setCreated={setCreated}/>
        <Create path="/new" authorName={authorName} setAuthorName={setAuthorName} created={created} setCreated={setCreated}/>
        <EditAuthor path="/edit/:_id" authorName={authorName} setAuthorName={setAuthorName} created={created} setCreated={setCreated}/>
      </Router>
    </div>
  );
}

export default App;
