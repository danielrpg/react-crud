import React,{ Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  // constructor() {

  //   super();

  //   this.state = {
      
  //     todos :[{
        
  //       id: 2, 
  //       name: 'Buy some clothes' 
      
  //     }]

  //   };

  // }

  render() {
    const helloWorld = 'Welcome to the React JS world';
    return (
      <div className="App">
        <h2> {helloWorld} </h2>
      </div>
    );
       
  }

}

export default App;
