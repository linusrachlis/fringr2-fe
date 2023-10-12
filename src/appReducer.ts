import {
    ActionType,
    AppAction,
    AppState,
    SelectedPerfs,
    SelectedShows,
} from './types.ts'

export const initialState: AppState = {
    selectedShows: [],
    selectedPerfs: [],
}

export default function appReducer(appState: AppState, action: AppAction) {
    return {
        selectedShows: selectedShowsReducer(appState.selectedShows, action),
        selectedPerfs: selectedPerfsReducer(appState.selectedPerfs, action),
    }
}

function selectedShowsReducer(
    selectedShows: SelectedShows,
    action: AppAction
): SelectedShows {
    switch (action.type) {
        case ActionType.SELECT_SHOW:
            return selectedShows
                .concat(action.show)
                .sort((a, b) =>
                    b.title.toLowerCase() < a.title.toLowerCase() ? 1 : -1
                )
        case ActionType.DESELECT_SHOW:
            return selectedShows.filter((eachShow) => eachShow !== action.show)
        default:
            return selectedShows
    }
}

function selectedPerfsReducer(
    selectedPerfs: SelectedPerfs,
    action: AppAction
): SelectedPerfs {
    switch (action.type) {
        case ActionType.TOGGLE_SELECT_PERF:
            // eslint-disable-next-line no-case-declarations
            const newState: SelectedPerfs = []
            // eslint-disable-next-line no-case-declarations
            let showFound = false

            for (const showId in selectedPerfs) {
                // NOTE: object keys become strings
                if (showId === String(action.perf.showId)) {
                    showFound = true
                    if (selectedPerfs[showId] !== action.perf.perfId) {
                        newState[showId] = action.perf.perfId
                    }
                    // If the same perf was toggled as was currently selected,
                    // then turn it off (i.e. exclude it from the new state).
                } else {
                    newState[showId] = selectedPerfs[showId]
                }
            }

            if (!showFound) {
                newState[action.perf.showId] = action.perf.perfId
            }

            return newState
        default:
            return selectedPerfs
    }
}
