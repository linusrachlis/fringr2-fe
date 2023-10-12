export type Show = {
    id: number
    title: string
    url: string
    venue: string
    address: string
}

export type ShowWithPerformances = Show & {
    perfs: PerformanceData[]
}

export type PerformanceData = {
    id: number
    flags: PerformanceFlag[]
    start: string // datetime
    end: string // datetime
}

export type PerformanceToRender = {
    title: string
    showId: number
    perfId: number
    flags: PerformanceFlag[]
    url: string
    venue: string
    address: string
    startString: string
    endString: string
    start: moment.Moment
    end: moment.Moment
    startTime: moment.Moment
    endTime: moment.Moment
    colourIndex: number
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

export type PerformancesByDay = Record<string, PerformanceToRender[]>

export type AppState = {
    selectedShows: SelectedShows
    selectedPerfs: SelectedPerfs
}

export type SelectedShows = ShowWithPerformances[]
export type SelectedPerfs = PerformanceData[]

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
    perf: PerformanceData
}
export type AppAction = SelectOrDeselectShowAction | ToggleSelectPerfAction
