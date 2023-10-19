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

function App() {
    const [appState, dispatch] = useReducer(appReducer, initialState)
    useEffect(() => {
        dispatch({ type: ActionType.INIT })
    }, [])

    const selectShow: SelectShowActionGenerator = (show: Show) => {
        dispatch({ type: ActionType.SELECT_SHOW, show })
    }
    const deselectShow: DeselectShowActionGenerator = (show: Show) => {
        dispatch({ type: ActionType.DESELECT_SHOW, show })
    }
    const toggleSelectPerf: ToggleSelectPerfActionGenerator = (
        perf: Performance
    ) => {
        dispatch({
            type: ActionType.TOGGLE_SELECT_PERF,
            perfId: perf.id,
            showId: perf.showId,
        })
    }

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
