import { useEffect, useReducer } from 'react'
import Calendar from './Calendar.tsx'
import SelectShows from './SelectShows.tsx'
import appReducer, { initialState } from './appReducer.ts'
import './styles/App.css'
import {
    ActionType,
    Show,
    Performance,
    ToggleSelectPerfActionGenerator,
    DeselectShowActionGenerator,
    SelectShowActionGenerator,
} from './types.ts'
import { restoreSelectedShows } from './persist.ts'

function App() {
    const [appState, dispatch] = useReducer(appReducer, initialState)

    const selectShow: SelectShowActionGenerator = (show, skipPersist = false) => {
        dispatch({ type: ActionType.SELECT_SHOW, show, skipPersist })
    }
    const deselectShow: DeselectShowActionGenerator = (show: Show) => {
        dispatch({ type: ActionType.DESELECT_SHOW, show })
    }
    const toggleSelectPerf: ToggleSelectPerfActionGenerator = (
        perf: Performance,
        skipPersist = false
    ) => {
        dispatch({
            type: ActionType.TOGGLE_SELECT_PERF,
            perfId: perf.id,
            showId: perf.showId,
            skipPersist: skipPersist,
        })
    }

    useEffect(() => {
        restoreSelectedShows(selectShow, toggleSelectPerf)
        // For some reason this runs twice on startup, so not only is this
        // cleanup theoretically a good practice, it's necessary to prevent
        // duplications of shows
        return function () {
            dispatch({type: ActionType.DESELECT_ALL_SHOWS})
        }
    }, [])

    return (
        <div className="app">
            <SelectShows
                selectedShows={appState.selectedShows}
                selectShow={selectShow}
                deselectShow={deselectShow}
            />
            <Calendar {...appState} toggleSelectPerf={toggleSelectPerf} />
        </div>
    )
}

export default App
