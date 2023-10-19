import moment, { Moment } from 'moment'
import flagsKey from './data/flagsKey.ts'
import './styles/Calendar.css'
import {
    PerformancesByDay,
    SelectedShows,
    Performance,
    ToggleSelectPerfActionGenerator,
} from './types.ts'

const numCssColours = 16

export default function Calendar({
    selectedShows,
    days,
    perfsByDay,
    minStartTime,
    timeRange,
    toggleSelectPerf,
}: {
    selectedShows: SelectedShows
    minStartTime?: Moment
    timeRange?: number
    perfsByDay: PerformancesByDay
    days: string[]
    toggleSelectPerf: (perf: Performance) => void
}) {
    if (selectedShows.length === 0 || minStartTime === undefined) {
        return null
    }

    // NOTE: if minStartTime is set, timeRange is guaranteed to be set.
    return (
        <ul className="calendar">
            {days.map((dayString) => (
                <CalendarDay
                    {...{
                        key: dayString,
                        dayString,
                        perfs: perfsByDay[dayString],
                        minStartTime: minStartTime,
                        timeRange: timeRange!,
                        selectedShows,
                        toggleSelectPerf,
                    }}
                />
            ))}
        </ul>
    )
}

function CalendarDay({
    perfs,
    dayString,
    minStartTime,
    timeRange,
    selectedShows,
    toggleSelectPerf,
}: {
    perfs: Performance[]
    dayString: string
    minStartTime: moment.Moment
    timeRange: number
    selectedShows: SelectedShows
    toggleSelectPerf: ToggleSelectPerfActionGenerator
}) {
    perfs.sort((a, b) => (a.start < b.start ? -1 : b.start < a.start ? 1 : 0))

    const renderedPerfs = perfs.map((perf, index) => (
        <CalendarItem
            {...{
                key: index,
                perf,
                minStartTime,
                timeRange,
                toggleSelectPerf,
                selectedShows,
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
    selectedShows,
    toggleSelectPerf,
}: {
    perf: Performance
    minStartTime: moment.Moment
    timeRange: number
    selectedShows: SelectedShows
    toggleSelectPerf: ToggleSelectPerfActionGenerator
}) {
    const show = selectedShows.find((show) => show.id === perf.showId)
    if (!show) return

    const leftPercent = (perf.startTime.diff(minStartTime) / timeRange) * 100
    const widthPercent =
        (perf.deemedEndTime.diff(perf.startTime) / timeRange) * 100

    const style = {
        marginLeft: `${leftPercent}%`,
        width: `${widthPercent}%`,
    }

    const colourIndex = perf.showId % numCssColours
    const colourClassName = `calendar-item-colour-${colourIndex}`
    const classNames = ['calendar-item', colourClassName]

    if (show.selectedPerfId !== undefined) {
        // Show has a selected performance
        if (show.selectedPerfId == perf.id) {
            // This one is selected
            classNames.push('calendar-item-selected')
        } else {
            // Another one is selected
            classNames.push('calendar-item-deselected')
        }
    }
    // Else, show has no selected performance

    return (
        <li style={style} className={classNames.join(' ')}>
            <div className="start time">{perf.start.format('h:mma')}</div>
            <div className="box">
                <h3 onClick={() => toggleSelectPerf(perf)}>{show.title}</h3>
                <p aria-label="Venue Map Link">
                    <a
                        href={buildMapUrl(show.venue, show.address)}
                        title={show.address}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {show.venue}
                    </a>
                </p>
                <p>
                    <a
                        href={show.url}
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
            {perf.end !== undefined && (
                <div className="end time">{perf.end.format('h:mma')}</div>
            )}
        </li>
    )
}
