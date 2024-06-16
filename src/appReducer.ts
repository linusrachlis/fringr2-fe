import moment, { Moment } from 'moment'
import {
    ActionType,
    AppAction,
    AppState,
    PerformancesByDay,
    SelectedShows,
} from './types.ts'
import { persistSelectedShows } from './persist.ts'

export const initialState: AppState = {
    minStartTime: undefined,
    maxEndTime: undefined,
    timeRange: undefined,
    selectedShows: [],
    perfsByDay: {},
    days: [],
}

function computeAggregatePerfInfo(selectedShows: SelectedShows): {
    perfsByDay: PerformancesByDay
    days: string[]
    minStartTime?: Moment
    maxEndTime?: Moment
    timeRange?: number
} {
    // Create chronologically ordered list of performances
    const days: string[] = []
    const perfsByDay: PerformancesByDay = {}

    let minStartTime: undefined | moment.Moment
    let maxEndTime: undefined | moment.Moment
    selectedShows.forEach((show) => {
        show.perfs.forEach((perf) => {
            if (
                minStartTime === undefined ||
                perf.startTime.isBefore(minStartTime)
            ) {
                minStartTime = perf.startTime
            }
            if (
                maxEndTime === undefined ||
                perf.deemedEndTime.isAfter(maxEndTime)
            ) {
                maxEndTime = perf.deemedEndTime
            }
            const dayString = perf.start.format('YYYY-MM-DD')

            if (!(dayString in perfsByDay)) {
                days.push(dayString)
                perfsByDay[dayString] = []
            }

            perfsByDay[dayString].push(perf)
        })
    })

    // NOTE: if maxEndTime is set, minStartTime is guaranteed also to be set.
    const timeRange = maxEndTime?.diff(minStartTime!)

    days.sort()

    return { perfsByDay, days, minStartTime, maxEndTime, timeRange }
}

export default function appReducer(
    state: AppState,
    action: AppAction
): AppState {
    switch (action.type) {
        case ActionType.SELECT_SHOW: {
            const selectedShows = state.selectedShows
                .concat(action.show)
                .sort((a, b) =>
                    b.title.toLowerCase() < a.title.toLowerCase() ? 1 : -1
                )
            if (!action.skipPersist) {
                persistSelectedShows(selectedShows)
            }
            const { perfsByDay, days, minStartTime, maxEndTime, timeRange } =
                computeAggregatePerfInfo(selectedShows)
            return {
                selectedShows,
                perfsByDay,
                days,
                minStartTime,
                maxEndTime,
                timeRange,
            }
        }
        case ActionType.DESELECT_SHOW: {
            const selectedShows = state.selectedShows.filter(
                (show) => show.id !== action.show.id
            )
            const { perfsByDay, days, minStartTime, maxEndTime, timeRange } =
                computeAggregatePerfInfo(selectedShows)
            persistSelectedShows(selectedShows)
            return {
                selectedShows,
                perfsByDay,
                days,
                minStartTime,
                maxEndTime,
                timeRange,
            }
        }
        case ActionType.DESELECT_ALL_SHOWS: {
            const selectedShows: SelectedShows = []
            const { perfsByDay, days, minStartTime, maxEndTime, timeRange } =
                computeAggregatePerfInfo(selectedShows)
            return {
                selectedShows,
                perfsByDay,
                days,
                minStartTime,
                maxEndTime,
                timeRange,
            }
        }
        case ActionType.TOGGLE_SELECT_PERF: {
            const selectedShows = state.selectedShows.map((show) => {
                if (show.id === action.showId) {
                    return { ...show, selectedPerfId: action.perfId }
                }
                return show
            })
            if (!action.skipPersist) {
                persistSelectedShows(selectedShows)
            }
            return { ...state, selectedShows }
        }
        default:
            return state
    }
}
