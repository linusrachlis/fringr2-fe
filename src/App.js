import React from 'react'
import SelectShows from './SelectShows'
import Calendar from './Calendar'

// NOTE: this is only the first 20 shows
import shows from './data'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedShows: [],
    }

    this.selectShow = this.selectShow.bind(this)
    this.deselectShow = this.deselectShow.bind(this)
  }

  selectShow(show) {
    this.setState({
      selectedShows: this.state.selectedShows.concat(show)
    })
  }

  deselectShow(show) {
    this.setState({
      selectedShows: this.state.selectedShows.filter(eachShow => eachShow !== show)
    })
  }

  render() {
    return <>
      <SelectShows
        shows={shows}
        selectedShows={this.state.selectedShows}
        selectShow={this.selectShow}
        deselectShow={this.deselectShow}
      />
      <Calendar
        selectedShows={this.state.selectedShows}
      />
    </>
  }
}

export default App
