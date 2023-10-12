import moment from 'moment'
import flagsKey from './data/flagsKey.ts'
import './styles/Calendar.css'
import {
    PerformanceData,
    PerformanceToRender,
    PerformancesByDay,
    SelectedPerfs,
    SelectedShows,
} from './types.ts'

const numCssColours = 16

export default function Calendar({
    selectedShows,
    selectedPerfs,
    toggleSelectPerf,
}: {
    selectedShows: SelectedShows
    selectedPerfs: SelectedPerfs
    toggleSelectPerf: (perf: Performance) => void
}) {
    if (selectedShows.length === 0) {
        return null
    }

    // Create chronologically ordered list of performances
    const days: string[] = []
    const perfsByDay: PerformancesByDay = {}

    const referenceStartOfDay = moment().startOf('day')
    let minStartTime: undefined | moment.Moment
    let maxEndTime: undefined | moment.Moment

    selectedShows.forEach((show) => {
        show.perfs.forEach(
            ({ id: perfId, flags, start: startString, end: endString }) => {
                const start = moment(startString)
                const end = moment(endString)

                const startTime = referenceStartOfDay
                    .clone()
                    .add(
                        start.diff(start.clone().startOf('day')),
                        'milliseconds'
                    )
                const endTime = referenceStartOfDay
                    .clone()
                    .add(end.diff(end.clone().startOf('day')), 'milliseconds')

                // TODO check timezone logic
                if (
                    minStartTime === undefined ||
                    startTime.isBefore(minStartTime)
                )
                    minStartTime = startTime
                if (maxEndTime === undefined || endTime.isAfter(maxEndTime))
                    maxEndTime = endTime

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
                    url: show.url,
                    venue: show.venue,
                    address: show.address,
                    startString,
                    endString,
                    start,
                    end,
                    startTime,
                    endTime,
                    colourIndex,
                })
            }
        )
    })

    // NOTE: we already return early if selectedShows.length === 0, so by this
    // point we know that minStartTime and maxEndTime are set to something.
    const timeRange = maxEndTime!.diff(minStartTime!)

    days.sort()

    return (
        <ul className="calendar">
            {days.map((dayString) => (
                <CalendarDay
                    {...{
                        key: dayString,
                        dayString,
                        perfsByDay,
                        minStartTime: minStartTime!,
                        timeRange,
                        selectedPerfs,
                        toggleSelectPerf,
                    }}
                />
            ))}
        </ul>
    )
}

function CalendarDay({
    perfsByDay,
    dayString,
    minStartTime,
    timeRange,
    selectedPerfs,
    toggleSelectPerf,
}: {
    perfsByDay: PerformancesByDay
    dayString: string
    minStartTime: moment.Moment
    timeRange: number
    selectedPerfs: SelectedPerfs
    toggleSelectPerf: (perf: PerformanceData) => void
}) {
    const perfs = perfsByDay[dayString]
    perfs.sort((a, b) =>
        a.startString < b.startString
            ? -1
            : b.startString < a.startString
            ? 1
            : 0
    )

    const renderedPerfs = perfs.map((perf, index) => (
        <CalendarItem
            {...{
                key: index,
                perf,
                minStartTime,
                timeRange,
                toggleSelectPerf,
                selectedPerfs,
            }}
        />
    ))

    return (
        <li key={dayString} className="calendar-day">
            <h2>{dayString}</h2>
            <ul>{renderedPerfs}</ul>
        </li>
    )
}

function buildMapUrl(venue: string, address: string) {
    const encodedQuery = encodeURIComponent(`${venue}, ${address}`)
    return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`
}

function CalendarItem({
    perf,
    minStartTime,
    timeRange,
    selectedPerfs,
    toggleSelectPerf,
}: {
    perf: PerformanceToRender
    minStartTime: moment.Moment
    selectedPerfs: SelectedPerfs
    timeRange: number
    toggleSelectPerf: (perf: PerformanceData) => void
}) {
    const leftPercent = (perf.startTime.diff(minStartTime) / timeRange) * 100
    const widthPercent = (perf.endTime.diff(perf.startTime) / timeRange) * 100

    const style = {
        marginLeft: `${leftPercent}%`,
        width: `${widthPercent}%`,
    }

    const colourClassName = `calendar-item-colour-${perf.colourIndex}`
    const classNames = ['calendar-item', colourClassName]

    if (perf.showId in selectedPerfs) {
        // FIXME I added '.id' here, does that work? Why did it work before??
        if (selectedPerfs[perf.showId].id === perf.perfId) {
            // This one is selected
            classNames.push('calendar-item-selected')
        } else {
            // Another one is selected
            classNames.push('calendar-item-deselected')
        }
    }
    // Else, none is selected

    const start = perf.start.format('h:mma')
    const end = perf.end.format('h:mma')
    return (
        <li style={style} className={classNames.join(' ')}>
            <div className="start time">{start}</div>
            <div className="box">
                <h3 onClick={() => toggleSelectPerf(perf)}>{perf.title}</h3>
                <p aria-label="Venue Map Link">
                    <a
                        href={buildMapUrl(perf.venue, perf.address)}
                        title={perf.address}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {perf.venue}
                    </a>
                </p>
                <p>
                    <a
                        href={perf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span
                            role="img"
                            aria-label="Official web page"
                            title="Official web page"
                        >
                            🌐
                        </span>
                    </a>
                    {perf.flags.map((flag, index) => {
                        if (!(flag in flagsKey)) return null
                        const flagOutput = flagsKey[flag]

                        return (
                            <span
                                key={index}
                                role="img"
                                aria-label={flagOutput.label}
                                title={flagOutput.label}
                            >
                                {flagOutput.emoji}
                            </span>
                        )
                    })}
                </p>
            </div>
            <div className="end time">{end}</div>
        </li>
    )
}
