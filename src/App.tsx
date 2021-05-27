import React from 'react'
import logo from './logo.svg'
import './App.css'

const TS = () => <code>Typescript</code>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React&nbsp;
          <TS />
          &nbsp;Boilerplate
        </p>
      </header>
    </div>
  )
}

export default App
