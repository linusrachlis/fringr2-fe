import { Moment } from 'moment'

export type ShowBase = {
    id: number
    title: string
    url: string
    venue: string
    address: string | null
}

export type ShowData = ShowBase & {
    perfsData: PerformanceData[]
}

export type Show = ShowBase & {
    perfs: Performance[]
    selectedPerfId?: number
}

export type PerformanceBase = {
    id: number
    flags: PerformanceFlag[]
}

export type PerformanceData = PerformanceBase & {
    start: string // datetime string
    end?: string // datetime string
}

export type Performance = PerformanceBase & {
    showId: number
    start: Moment
    end?: Moment
    // Times normalized to current day -- note, if show has no runtime and thus
    // no precise end time, we "deem" the end time to be 2 hours after start,
    // for the purpose of calculating "maxEndTime" of the set of performances.
    startTime: moment.Moment
    deemedEndTime: moment.Moment
}

export type PerformanceFlag =
    | 'assisted-hearing'
    | 'audio-description'
    | 'closed-captioning'
    | 'relaxed'
    | 'asl'
    | 'tad'
    | 'touch-book'
    | 'touch-tour'
    | 'preview'

export type PerformanceFlagDetail = {
    emoji: string
    label: string
}

export type SelectedShows = Show[]
export type PerformancesByDay = Record<string, Performance[]>
export type AppState = {
    minStartTime?: Moment
    maxEndTime?: Moment // TODO: is this actually needed in the state?
    timeRange?: number
    selectedShows: SelectedShows
    perfsByDay: PerformancesByDay
    days: string[]
}

// The state persisted to localStorage is a mapping of show IDs to selected
// performance IDs. The selected perf ID is optional, since a show may not have
// any selected perf, even though the show itself is selected.
export type PersistentAppState = Record<string, number | null>

export enum ActionType {
    SELECT_SHOW,
    DESELECT_SHOW,
    DESELECT_ALL_SHOWS,
    SELECT_PERF,
}
type SelectShowAction = {
    type: ActionType.SELECT_SHOW
    show: Show
    skipPersist: boolean
}
type DeselectShowAction = {
    type: ActionType.DESELECT_SHOW
    show: Show
}
type SelectPerfAction = {
    type: ActionType.SELECT_PERF
    showId: number
    perfId: number
    skipPersist: boolean
}
export type AppAction =
    | SelectShowAction
    | DeselectShowAction
    | { type: ActionType.DESELECT_ALL_SHOWS }
    | SelectPerfAction

export type SelectShowActionGenerator = (
    show: Show,
    skipPersist?: boolean
) => void
export type DeselectShowActionGenerator = (show: Show) => void
export type SelectPerfActionGenerator = (
    perf: Performance,
    skipPersist?: boolean
) => void
