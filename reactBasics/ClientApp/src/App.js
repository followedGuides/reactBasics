import React, { Component } from 'react';
import StatefullComponent from './components/statefull-component';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <StatefullComponent
            items={["apple", "orange", "peaches"]}
    
            
        />
    );
  }
}
