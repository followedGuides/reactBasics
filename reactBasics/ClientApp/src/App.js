import React, { Component } from 'react';
import StatelessComponent from './components/stateless-component';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <StatelessComponent
            items={["apple", "orange", "peaches"]}
    
            
        />
    );
  }
}
