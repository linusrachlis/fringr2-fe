import React from 'react'

// import shows from './data'

class Calendar extends React.Component {
  render() {
    return <ul className="calendar">
      {
        this.props.selectedShows.map(show =>
          <li key={show.url}>{show.title}</li>)
      }
    </ul>
  }
}

export default Calendar
