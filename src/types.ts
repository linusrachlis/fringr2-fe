import { Moment } from 'moment'

export type ShowBase = {
    id: number
    title: string
    url: string
    venue: string
    address: string
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
    end: string // datetime string
}

export type Performance = PerformanceBase & {
    showId: number
    start: Moment
    end: Moment
    startTime: moment.Moment // time normalized to current day
    endTime: moment.Moment // time normalized to current day
}

export type PerformanceFlag =
    | 'assisted-hearing'
    | 'audio-description'
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

export enum ActionType {
    SELECT_SHOW,
    DESELECT_SHOW,
    TOGGLE_SELECT_PERF,
}
type SelectOrDeselectShowAction = {
    type: ActionType.SELECT_SHOW | ActionType.DESELECT_SHOW
    show: Show
}
type ToggleSelectPerfAction = {
    type: ActionType.TOGGLE_SELECT_PERF
    showId: number
    perfId: number
}
export type AppAction = SelectOrDeselectShowAction | ToggleSelectPerfAction

export type SelectShowActionGenerator = (show: Show) => void
export type DeselectShowActionGenerator = (show: Show) => void
export type ToggleSelectPerfActionGenerator = (perf: Performance) => void
