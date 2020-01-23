import React, { Component } from 'react';
import StatelessComponent from './components/stateless-component';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <StatelessComponent

            props_1="hello im prop 1"
            props_2={12}
            props_3={false}
            props_4={{ key: "iamthekey", value: "iamthevalue" }}
            
        />
    );
  }
}
