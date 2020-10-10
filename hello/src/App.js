import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Myname from './Myname';
import Counter from './Counter';

function App() { // 함수형 컴포넌트
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <Myname name = "r00t0k"></Myname>
           <Myname/>
        </p>
        <p>
          <Counter number></Counter>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


export default App;
