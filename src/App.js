import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          CRUD React
      </header>
      <div clasName="container">
        <h2 className="text-center p-4">Todo App</h2>
          <ul className="list-group">
            <li className="list-group-item">SOEM LIST ITEM</li>
            <li className="list-group-item">WRITE SOME CODE</li>
            <li className="list-group-item">WATCH BAHDCAST</li>
          </ul>
      </div>   
    </div>
  );
}

export default App;
