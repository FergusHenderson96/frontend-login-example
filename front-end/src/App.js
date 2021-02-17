import './App.css';
import React, {Component} from 'react';
import PostRequest from './PostRequest/PostRequest'
import Login from './components/Login';
import Feed from './components/Feed';
import Post from './components/Post';

class App extends Component{
  state = {
  user: (""),
  posts: (""),

  }



  render () {
  return (
    <div className="App">
     <PostRequest/>
    </div>
  );
}
}
export default App;