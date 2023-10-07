import React from 'react'

import SelectShows from './SelectShows'
import Calendar from './Calendar'

import './styles/App.css'

function App(props) {
  return <div className="app">
    <SelectShows />
    <Calendar />
  </div>
}

export default App
