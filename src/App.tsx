import { ReactNode, useReducer } from 'react'

import {
    AppContext,
    AppDispatchContext,
    appReducer,
    initialState,
} from './AppContext.ts'
import SelectShows from './SelectShows.tsx'
import Calendar from './Calendar.tsx'

import './styles/App.css'

function AppProvider({ children }: { children: ReactNode }) {
    const [appState, appDispatch] = useReducer(appReducer, initialState)

    return (
        <AppContext.Provider value={appState}>
            <AppDispatchContext.Provider value={appDispatch}>
                {children}
            </AppDispatchContext.Provider>
        </AppContext.Provider>
    )
}

function App() {
    return (
        <div className="app">
            <AppProvider>
                <SelectShows />
                <Calendar />
            </AppProvider>
        </div>
    )
}

export default App
