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

    const referenceStartOfDay = moment().startOf('day')
    let minStartTime
    let maxEndTime

    this.props.selectedShows.forEach((show, showIndex) => {
      const colourIndex = showIndex % numColours

      show.perfs.forEach(({ flags, start: startString, end: endString }) => {
        const start = moment(startString)
        const end = moment(endString)

        const startTime = referenceStartOfDay.clone().add(
          start.diff(start.clone().startOf('day')),
          'milliseconds',
        )
        const endTime = referenceStartOfDay.clone().add(
          end.diff(end.clone().startOf('day')),
          'milliseconds',
        )

        // TODO check timezone logic
        if (minStartTime === undefined || startTime.isBefore(minStartTime)) minStartTime = startTime
        if (maxEndTime === undefined || endTime.isAfter(maxEndTime)) maxEndTime = endTime

        const dayString = start.format('YYYY-MM-DD')

        if (!(dayString in perfsByDay)) {
          days.push(dayString)
          perfsByDay[dayString] = []
        }

        perfsByDay[dayString].push({
          title: show.title,
          flags,
          startString,
          endString,
          start,
          end,
          startTime,
          endTime,
          colourIndex,
        })
      })
    })

    const timeRange = maxEndTime.diff(minStartTime)

    days.sort()

    return <ul className="calendar">
      {days.map(dayString =>
        <CalendarDay {...{ key: dayString, dayString, perfsByDay, minStartTime, timeRange }} />)}
    </ul>
  }
}

class CalendarDay extends React.Component {
  render() {
    const perfs = this.props.perfsByDay[this.props.dayString]
    perfs.sort((a, b) => (a.startString < b.startString) ? -1 : ((b.startString < a.startString) ? 1 : 0))

    const { minStartTime, timeRange } = this.props

    const renderedPerfs = perfs.map((perf, index) =>
      <CalendarItem {...{ key: index, perf, minStartTime, timeRange }} />
    )

    return <li key={this.props.dayString} className="calendar-day">
      <h2>{this.props.dayString}</h2>
      <ul>{renderedPerfs}</ul>
    </li>
  }
}

class CalendarItem extends React.Component {
  render() {
    const colourClassName = `calendar-item-colour-${this.props.perf.colourIndex}`
    const leftPercent = this.props.perf.startTime.diff(this.props.minStartTime) / this.props.timeRange * 100
    const widthPercent = this.props.perf.endTime.diff(this.props.perf.startTime) / this.props.timeRange * 100
    const style = {
      marginLeft: `${leftPercent}%`,
      width: `${widthPercent}%`
    }

    const perfTime = `${this.props.perf.start.format('H:mm')} - ${this.props.perf.end.format('H:mm')}`
    return <li
      style={style}
      className={`calendar-item ${colourClassName}`}
      title={perfTime}
    >{this.props.perf.title}</li>
  }
}

export default Calendar
