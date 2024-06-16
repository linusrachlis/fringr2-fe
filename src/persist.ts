import {
    PersistentAppState,
    SelectShowActionGenerator,
    SelectedShows,
    ToggleSelectPerfActionGenerator,
} from './types'
import shows from './data/shows'

const storageKey = 'persistentAppState'

export function restoreSelectedShows(
    selectShow: SelectShowActionGenerator,
    toggleSelectPerf: ToggleSelectPerfActionGenerator
): void {
    const serialized = localStorage.getItem(storageKey)
    const savedState: PersistentAppState = serialized
        ? JSON.parse(serialized)
        : {}

    for (const show of shows) {
        const showIdStr = show.id.toString()
        if (!(showIdStr in savedState)) continue
        selectShow(show, true)
        const selectedPerfId = savedState[showIdStr]
        if (selectedPerfId === null) continue
        toggleSelectPerf(show.perfs[selectedPerfId], true)
    }
}

export function persistSelectedShows(selectedShows: SelectedShows) {
    const stateToSave: PersistentAppState = {}

    selectedShows.forEach((show) => {
        const showIdStr = show.id.toString()
        stateToSave[showIdStr] =
            show.selectedPerfId === undefined ? null : show.selectedPerfId
    })

    const serialized = JSON.stringify(stateToSave)
    localStorage.setItem(storageKey, serialized)
}
