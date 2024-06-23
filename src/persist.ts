import shows from './data/shows'
import {
    Performance,
    PersistentAppState,
    SelectPerfActionGenerator,
    SelectShowActionGenerator,
    SelectedShows,
    Show,
} from './types'

export function restoreSelectedShows(
    selectShow: SelectShowActionGenerator,
    selectPerf: SelectPerfActionGenerator
): void {
    // Decode show ID => perf ID selections from query params, and dispatch
    // actions to select them.
    const params = new URLSearchParams(window.location.search)
    const savedState: PersistentAppState = {}
    params.forEach((value, key) => {
        const perfId = value === 'null' ? null : parseInt(value)
        const showId = key
        savedState[showId] = perfId
    })

    for (const show of shows) {
        const showIdStr = show.id.toString()
        if (!(showIdStr in savedState)) continue
        selectShow(show, true)

        const selectedPerfId = savedState[showIdStr]
        let selectedPerf: Performance | undefined
        if (selectedPerfId !== null) {
            selectedPerf = getPerfById(show, selectedPerfId)
        }

        if (selectedPerf === undefined) {
            continue
        }

        selectPerf(selectedPerf, true)
    }
}

function getPerfById(show: Show, perfId: number): Performance | undefined {
    return show.perfs.find((perf) => perf.id === perfId)
}

export function persistSelectedShows(selectedShows: SelectedShows) {
    // Encode show ID => perf ID selections as query params and push them into
    // the address bar.
    const params = new URLSearchParams()

    selectedShows.forEach((show) => {
        params.set(
            show.id.toString(),
            show.selectedPerfId === undefined
                ? 'null'
                : show.selectedPerfId.toString()
        )
    })

    const newQueryString = params.toString()
    window.history.replaceState('', '', `?${newQueryString}`)
}
