import { createContext, useContext } from "react";

export const AppContext = createContext({});
export const AppDispatchContext = createContext({});

export function useAppState() {
  return useContext(AppContext);
}

export function useAppDispatch() {
  return useContext(AppDispatchContext);
}

type AppState = {
  selectedShows: [];
  selectedPerfs: [];
};

export const initialState: AppState = {
  selectedShows: [],
  selectedPerfs: [],
};

export const SELECT_SHOW = "SELECT_SHOW";
export const DESELECT_SHOW = "DESELECT_SHOW";
export const TOGGLE_SELECT_PERF = "TOGGLE_SELECT_PERF";

export function appReducer(appState: AppState, action) {
  console.log("received action: ", action);
  return {
    selectedShows: selectedShowsReducer(appState.selectedShows, action),
    selectedPerfs: selectedPerfsReducer(appState.selectedPerfs, action),
  };
}

function selectedShowsReducer(selectedShows, action) {
  switch (action.type) {
    case SELECT_SHOW:
      return selectedShows
        .concat(action.show)
        .sort((a, b) => b.title.toLowerCase() < a.title.toLowerCase());
    case DESELECT_SHOW:
      return selectedShows.filter((eachShow) => eachShow !== action.show);
    default:
      return selectedShows;
  }
}

function selectedPerfsReducer(selectedPerfs, action) {
  switch (action.type) {
    case TOGGLE_SELECT_PERF:
      // eslint-disable-next-line no-case-declarations
      const newState = {};
      // eslint-disable-next-line no-case-declarations
      let showFound = false;

      for (const showId in selectedPerfs) {
        // NOTE: object keys become strings
        if (showId === String(action.perf.showId)) {
          showFound = true;
          if (selectedPerfs[showId] !== action.perf.perfId) {
            newState[showId] = action.perf.perfId;
          }
          // If the same perf was toggled as was currently selected,
          // then turn it off (i.e. exclude it from the new state).
        } else {
          newState[showId] = selectedPerfs[showId];
        }
      }

      if (!showFound) {
        newState[action.perf.showId] = action.perf.perfId;
      }

      return newState;
    default:
      return selectedPerfs;
  }
}
