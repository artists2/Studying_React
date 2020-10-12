import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './component/PhoneForm';
import PhoneInfo from './component/PhoneInfo';
import PhoneInfoList from './component/PhoneInfoList';



class App extends Component {
  id = 2
  state = {
    information: [ // information 배열 선언
      {
        id: 0,
        name: 'r00t0k',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: 'artist2',
        phone: '010-0000-0001'
      }
    ]
  }


  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data})
    })
    
    console.log(data);
  }

  render() {
    const { information } = this.state;
    return(
      <div className = "App">
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <PhoneInfoList data = { this.state.information}/>     {/*{JSON.stringify(information)}*/}
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
