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
    this.props.selectedShows.forEach((show, showIndex) => {
      const colourIndex = showIndex % numColours

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
          colourIndex,
        })
      })
    })

    days.sort()

    return <ul className="calendar">
      {days.map(dayString =>
        <CalendarDay
          dayString={dayString}
          perfsByDay={perfsByDay}
        />)}
    </ul>
  }
}

class CalendarDay extends React.Component {
  render() {
    const perfs = this.props.perfsByDay[this.props.dayString]
    perfs.sort((a, b) => (a.start < b.start) ? -1 : ((b.start < a.start) ? 1 : 0))

    // TODO check timezone logic
    // TODO use overall min and overall max, to spread out boxes as much as possible
    const minTime = moment(`${this.props.dayString} 09:00:00`)
    const maxTime = moment(`${this.props.dayString}`).add(1, 'day')
    const timeRange = minTime.diff(maxTime) // NOTE always the same, ish

    const renderedPerfs = perfs.map((perf, index) =>
      <CalendarItem {...{perf, index, minTime, maxTime, timeRange}} />
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
    const leftPercent = this.props.minTime.diff(this.props.perf.start) / this.props.timeRange * 100
    const widthPercent = this.props.perf.start.diff(this.props.perf.end) / this.props.timeRange * 100
    const style = {
      marginLeft: `${leftPercent}%`,
      width: `${widthPercent}%`
    }

    const perfTime = `${this.props.perf.start.format('H:mm')} - ${this.props.perf.end.format('H:mm')}`
    return <li
      key={this.props.index}
      style={style}
      className={`calendar-item ${colourClassName}`}
      title={perfTime}
    >{this.props.perf.title}</li>
  }
}

export default Calendar
