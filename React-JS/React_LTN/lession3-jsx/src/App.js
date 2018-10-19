import React, { Component } from 'react';
import './App.css';
import Left from './components/Left'
import Right from './components/Right'
class App extends Component {
  render() {
    return (
        <div>
           <Left></Left>
           <Right></Right>
        </div>
        );
  }
}

export default App;
