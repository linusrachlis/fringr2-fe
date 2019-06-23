import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { selectedShowsSelector, selectedPerfsSelector } from './selectors'
import { toggleSelectPerf } from './actions'

const numCssColours = 16

class UnconnectedCalendar extends React.Component {
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

    this.props.selectedShows.forEach(show => {
      show.perfs.forEach(({
        id: perfId,
        flags,
        start: startString,
        end: endString
      }) => {
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

        const colourIndex = show.id % numCssColours

        perfsByDay[dayString].push({
          title: show.title,
          showId: show.id,
          perfId,
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
        <CalendarDay {...{
          key: dayString,
          dayString,
          perfsByDay,
          minStartTime,
          timeRange,
        }} />)}
    </ul>
  }
}

class UnconnectedCalendarDay extends React.Component {
  render() {
    const perfs = this.props.perfsByDay[this.props.dayString]
    perfs.sort((a, b) => (a.startString < b.startString) ? -1 : ((b.startString < a.startString) ? 1 : 0))

    const { minStartTime, timeRange } = this.props

    const renderedPerfs = perfs.map((perf, index) =>
      <CalendarItem
        {...{ key: index, perf, minStartTime, timeRange }}
      />
    )

    return <li key={this.props.dayString} className="calendar-day">
      <h2>{this.props.dayString}</h2>
      <ul>{renderedPerfs}</ul>
    </li>
  }
}

class UnconnectedCalendarItem extends React.Component {

  /**
   * @TODO convert to selector and use enum instead of magic numbers
   * Returns 1 for selected, -1 for deselected, and 0 for initial state.
   * @param {object} perf
   * @returns number
   */
  getPerfStatus(perf) {
    if (perf.showId in this.props.selectedPerfs) {
      if (this.props.selectedPerfs[perf.showId] === perf.perfId) {
        return 1
      } else {
        return -1
      }
    } else {
      return 0
    }
  }

  render() {
    const leftPercent = this.props.perf.startTime.diff(this.props.minStartTime) / this.props.timeRange * 100
    const widthPercent = this.props.perf.endTime.diff(this.props.perf.startTime) / this.props.timeRange * 100

    const style = {
      marginLeft: `${leftPercent}%`,
      width: `${widthPercent}%`,
    }

    const colourClassName = `calendar-item-colour-${this.props.perf.colourIndex}`
    const classNames = ['calendar-item', colourClassName]
    const perfStatus = this.getPerfStatus(this.props.perf)

    if (perfStatus === 1) {
      classNames.push('calendar-item-selected')
    } else if (perfStatus === -1) {
      classNames.push('calendar-item-deselected')
    }

    const perfTime = `${this.props.perf.start.format('H:mm')} - ${this.props.perf.end.format('H:mm')}`
    return <li
      style={style}
      className={classNames.join(' ')}
      title={perfTime}
      onClick={() => this.props.toggleSelectPerf(this.props.perf)}
    ><h3>{this.props.perf.title}</h3></li>
  }
}

const mapStateToProps = state => ({
  selectedShows: selectedShowsSelector(state),
  selectedPerfs: selectedPerfsSelector(state),
})

const mapDispatchToProps = dispatch => ({
  toggleSelectPerf: perf => dispatch(toggleSelectPerf(perf)),
})

const Calendar = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCalendar)
const CalendarDay = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCalendarDay)
const CalendarItem = connect(mapStateToProps, mapDispatchToProps)(UnconnectedCalendarItem)

export default Calendar
