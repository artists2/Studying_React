import React, { Component } from 'react';



class Myname extends Component { //class components
    render() {
      return (
        <div>
          Hello, My name is <b>{this.props.name}</b> !
        </div>
      );
    }
  }




  Myname.defaultProps = {
      name: '김철수'
  };

  export default Myname;