import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';
// example how it works pod kapotom
// function App() {
//   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hello, world!'));
// }

function App() {
  return (
  		<div className="App">
  			<h1>Hello, world!</h1>
  			<p>Subtext</p>
  			<Person />
  		</div>
  	);
}

export default App;
