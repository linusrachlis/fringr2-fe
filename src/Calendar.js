import React from 'react'
import moment from 'moment'

const numColours = 17

class Calendar extends React.Component {
  render() {
    if (this.props.selectedShows.length === 0) {
      return null
    }

    // Create chronologically ordered list of performances
    const days = []
    const perfsByDay = {}
    this.props.selectedShows.forEach(show => {
      show.perfs.forEach(({ flags, start, end }) => {
        const startMoment = moment(start)
        const endMoment = moment(end)
        const dayString = startMoment.format('YYYY-MM-DD')
        if (!(dayString in perfsByDay)) {
          days.push(dayString)
          perfsByDay[dayString] = []
        }
        perfsByDay[dayString].push({
          title: show.title,
          flags,
          start: startMoment,
          end: endMoment,
        })
      })
    })
    days.sort()

    return <ul className="calendar">
      {
        days.map(dayString => {
          const perfs = perfsByDay[dayString]
          perfs.sort((a, b) => (a.start < b.start) ? -1 : ((b.start < a.start) ? 1 : 0))

          // TODO check timezone logic
          // TODO use overall min and overall max, to spread out boxes as much as possible
          const minTime = moment(`${dayString} 09:00:00`)
          const maxTime = moment(`${dayString}`).add(1, 'day')
          const timeRange = minTime.diff(maxTime) // NOTE always the same, ish

          const perfsRender = perfs.map((perf, index) => {
            // TODO make colour code the show
            const colourIndex = index % numColours
            const colourClassName = `calendar-item-colour-${colourIndex}`
            const leftPercent = minTime.diff(perf.start) / timeRange * 100
            const widthPercent = perf.start.diff(perf.end) / timeRange * 100
            const style = {
              marginLeft: `${leftPercent}%`,
              width: `${widthPercent}%`
            }

            const perfTime = `${perf.start.format('H:mm')} - ${perf.end.format('H:mm')}`
            return <li
              key={index}
              style={style}
              className={`calendar-item ${colourClassName}`}
              title={perfTime}
            >{perf.title}</li>
          })

          return <li key={dayString} className="calendar-day">
            <h2>{dayString}</h2>
            <ul>{perfsRender}</ul>
          </li>
        })
      }
    </ul>
  }
}

export default Calendar
