export const SELECT_SHOW = 'SELECT_SHOW'
export const DESELECT_SHOW = 'DESELECT_SHOW'
export const TOGGLE_SELECT_PERF = 'TOGGLE_SELECT_PERF'

// TODO enum for selected state?

export function selectShow(show) {
  return { type: SELECT_SHOW, show }
}

export function deselectShow(show) {
  return { type: DESELECT_SHOW, show }
}

export function toggleSelectPerf(perf) {
  return { type: TOGGLE_SELECT_PERF, perf }
}
