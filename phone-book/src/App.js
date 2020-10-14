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
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data})
    })
    
    console.log(data);
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
        ? { ...info, ...data }
        : info
      )
    })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) != -1
    );
    return(
      <div className = "App">
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <p>
          <input
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
        <hr/>
        <PhoneInfoList 
        data = { filteredList }
        onRemove = {this.handleRemove}
        onUpdate = {this.handleUpdate}
        />     {/*{JSON.stringify(information)}*/}
      </div>
    );
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
