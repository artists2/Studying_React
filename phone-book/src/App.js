import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './component/PhoneForm';



class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }

  render() {
    return(
      <div className = "App">
        <PhoneForm
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}


/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
*/
export default App;