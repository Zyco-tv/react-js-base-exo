import React from 'react';
import './App.css';
import Number from'./Number.js';
import Compter from'./Compter.js';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      compter: 0
    }
    this.add = this.add.bind(this)
    this.moin = this.moin.bind(this)
  }

  add(){
    console.log("plus")
    this.setState(state =>({
      compter: state.compter + 1
    }))
  }

  moin(){
    console.log("moin")
    this.setState(state =>({
      compter: state.compter - 1
    }))
  }

  render() {
    return (
      <div className="App">
        <Number nombre={this.state.compter}></Number>
        <Compter value="+" change={this.add}></Compter>
        <Compter value="-" change={this.moin}></Compter>
      </div>
    );
  }
}

export default App;
