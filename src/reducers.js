import { combineReducers } from 'redux'
import {
  SELECT_SHOW,
  DESELECT_SHOW,
  TOGGLE_SELECT_PERF
} from './actions'

export const rootReducer = combineReducers({
  selectedShows,
  selectedPerfs,
})

  let newState
  switch (action.type) {
    case SELECT_SHOW:
      newState = state.concat(action.show)
      break
    case DESELECT_SHOW:
      newState = state.filter(eachShow => eachShow !== action.show)
      break
    default:
      newState = state
      break
  }
  newState.sort((a, b) => b.title.toLowerCase() < a.title.toLowerCase())
  return newState
}

function selectedPerfs(state = {}, action) {
  switch (action.type) {
    case TOGGLE_SELECT_PERF:
      const newState = {}
      let showFound = false

      for (let showId in state) {
        // NOTE: object keys become strings
        if (showId === String(action.perf.showId)) {
          showFound = true
          if (state[showId] !== action.perf.perfId) {
            newState[showId] = action.perf.perfId
          } else {
          }
          // If the same perf was toggled as was currently selected,
          // then turn it off (i.e. exclude it from the new state).
        } else {
          newState[showId] = state[showId]
        }
      }

      if (!showFound) {
          newState[action.perf.showId] = action.perf.perfId
      }

      return newState
    default:
      return state
  }
}
