import { types } from './actions'

const initialState = {
  isloading: true,
  progress: 0,
}

function reducer(appState = initialState, { type, payload }) {
  switch (type) {
    case types.IMG_LOAD_START:
      appState = {...appState, isloading: payload.isloading, progress: payload.progress}
      return appState;
    case types.IMG_LOAD_END:
      appState = {...appState, isloading: payload}
      return appState;
    case types.SET_CURRENT_PROGRESS:
      appState = {...appState, progress: payload};
      return appState;
    case types.SET_IMAGES:
      appState = {...appState, imgs: payload};
      return appState;
    default:
      return appState;
  }
}

export function selectState(state) {
  return state.imgLoad.imgLoad
}

export const getLoadingState = (state) => {
  return state.imgLoad.isloading;
}

export const getCurrentProgress = (state) => {
  return state.imgLoad.progress;
}

export const getImages = (state) => {
  return state.imgLoad.imgs;
}

export default reducer
