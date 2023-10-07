import { useReducer } from 'react'

import { AppContext, AppDispatchContext, appReducer, initialState } from './AppContext.ts'
import SelectShows from './SelectShows.tsx'
import Calendar from './Calendar.tsx'

import './styles/App.css'

function AppProvider({ children }) {
  const [tasks, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={tasks}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}
function App() {
  return <div className="app">
    <AppProvider>
      <SelectShows />
      <Calendar />
    </AppProvider>
  </div>
}

export default App
