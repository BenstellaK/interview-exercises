import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import mockdata from './mockdata.json';
class App extends Component {
  constructor() {
    super();
    this.state = {
      data:mockdata,
      addfeed:""
    };
    this.handleClick=this.handleClick.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

handleClick(e){
  var  mdata= this.state.data.feed.map((item)=> {
       if(item.id==e.target.name){
          item ={...item,likes:item.likes+1}
          return item;
       }
       else
       return item;
    });
    this.setState({data:{...this.state.data,feed:mdata}});
}
handleChange(e){
   console.log(e.target.value);
   this.setState({[e.target.name]:e.target.value});
}
 handleSubmit(e){
     var addFeed ={
      "user": "user",
      "value":this.state.addfeed,
      "id": this.state.data.feed.length+1,
      "timestamp": "",
      "timeZoneOffset": "",
      "likes": 0
    }
   var updatedarray=this.state.data.feed;
   updatedarray.push(addFeed);
   this.setState({data:{...this.state.data,feed:updatedarray}});
   this.setState({addfeed:''});
   this.refs.myinput.focus();
  }
  render() {
    return (
      <div>
      <h2>Welcome to your feed</h2>
      <div>Feed count: {this.state.data.feed.length}</div>
      <br/>
       {this.state.data.feed.map((item,index) => 
        <li key={index}>{item.value} 
        &nbsp; &nbsp;
        <span>Likes:{item.likes}</span>
        <button onClick={this.handleClick} name={item.id}>Like</button>
        </li>)}
        <br/>
        <label>Add Feed:</label>
          <input type="text" name="addfeed" value={this.state.addfeed} onChange={this.handleChange} ref="myinput"/>
          <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
