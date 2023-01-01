import './App.css';
import React from 'react';
import PersonCard from './components/PersonCard';

class App extends React.Component {
  render() {
    return (
              <div className='margin'>
                <h1>Personas</h1>
                <PersonCard nombre="Doe, Jane" edad={45} cabello="Black" />
                <PersonCard nombre="Smith, John" edad={88} cabello="Brown" />
              </div>
    )
  }
}

export default App;
