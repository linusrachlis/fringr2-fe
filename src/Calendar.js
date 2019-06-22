import React from 'react'
import moment from 'moment'

const numColours = 17

class Calendar extends React.Component {
  render() {
    if (this.props.selectedShows.length === 0) {
      return null
    }

    // Create chronologically ordered list of performances
    const perfs = []
    this.props.selectedShows.forEach(show => {
      show.perfs.forEach(({ flags, start, end }) => {
        perfs.push({
          show,
          flags,
          start: moment(start),
          end: moment(end),
        })
      })
    })
    perfs.sort((a, b) => (a.start < b.start) ? -1 : ((b.start < a.start) ? 1 : 0))

    const minTime = perfs[0].start
    const maxTime = perfs[perfs.length - 1].end
    const timeRange = minTime.diff(maxTime)

    return <ul className="calendar">
      {
        perfs.map((perf, index) => {
          const colourIndex = index % numColours
          const colourClassName = `calendar-item-colour-${colourIndex}`
          const leftPercent = minTime.diff(perf.start) / timeRange * 100
          const widthPercent = perf.start.diff(perf.end) / timeRange * 100
          const style = {
            marginLeft: `${leftPercent}%`,
            width: `${widthPercent}%`
          }
          return <li
            key={index}
            style={style}
            className={`calender-item ${colourClassName}`}
          >{perf.show.title}</li>
        })
      }
    </ul>
  }
}

export default Calendar
