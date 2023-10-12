import { useReducer } from 'react'
import Calendar from './Calendar.tsx'
import SelectShows from './SelectShows.tsx'
import appReducer, { initialState } from './appReducer.ts'
import './styles/App.css'
import { ActionType, Show } from './types.ts'

function App() {
    const [appState, dispatch] = useReducer(appReducer, initialState)

    function selectShow(show: Show) {
        dispatch({ type: ActionType.SELECT_SHOW, show })
    }
    function deselectShow(show: Show) {
        dispatch({ type: ActionType.DESELECT_SHOW, show })
    }
    function toggleSelectPerf(perf: Performance) {
        dispatch({ type: ActionType.TOGGLE_SELECT_PERF, perf })
    }

    return (
        <div className="app">
            <SelectShows
                selectedShows={appState.selectedShows}
                selectShow={selectShow}
                deselectShow={deselectShow}
            />
            <Calendar
                selectedShows={appState.selectedShows}
                selectedPerfs={appState.selectedPerfs}
                toggleSelectPerf={toggleSelectPerf}
            />
        </div>
    )
}

export default App
