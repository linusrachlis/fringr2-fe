import React from 'react'
import SelectShows from './SelectShows'
import Calendar from './Calendar'

import shows from './data'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedShows: [],
      selectedPerfs: {},
    }

    this.selectShow = this.selectShow.bind(this)
    this.deselectShow = this.deselectShow.bind(this)
    this.toggleSelectPerf = this.toggleSelectPerf.bind(this)
    this.getPerfStatus = this.getPerfStatus.bind(this)
  }

  selectShow(show) {
    this.setState({
      selectedShows: this.state.selectedShows.concat(show),
    })
  }

  deselectShow(show) {
    this.setState({
      selectedShows: this.state.selectedShows.filter(eachShow => eachShow !== show),
    })
  }

  toggleSelectPerf(perf) {
    const { selectedPerfs } = this.state

    if (
      perf.showId in selectedPerfs &&
      selectedPerfs[perf.showId] === perf.perfId
    ) {
      delete selectedPerfs[perf.showId]
    } else {
      selectedPerfs[perf.showId] = perf.perfId
    }

    this.setState({ selectedPerfs })
  }

  /**
   * Returns 1 for selected, -1 for deselected, and 0 for initial state.
   * @param {object} perf
   * @returns number
   */
  getPerfStatus(perf) {
    if (perf.showId in this.state.selectedPerfs) {
      if (this.state.selectedPerfs[perf.showId] === perf.perfId) {
        return 1
      } else {
        return -1
      }
    } else {
      return 0
    }
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
        selectedPerfs={this.state.selectedPerfs}
        toggleSelectPerf={this.toggleSelectPerf}
        getPerfStatus={this.getPerfStatus}
      />
    </>
  }
}

export default App
