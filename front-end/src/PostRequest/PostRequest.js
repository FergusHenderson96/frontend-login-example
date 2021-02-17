import React, {Component} from 'react';

class App extends Component{
    state = {
        posts: ""
    }

requestPosts = () => {
    fetch(`http://localhost:5000`)
    .then((res) => res.json())
    .then((data) => { 
       this.setState({posts: data}) 
        console.log(data)
})}

render () {
    return (
<div>
<p>{this.state.posts}hello</p>
</div>
    )}    
}

export default App;