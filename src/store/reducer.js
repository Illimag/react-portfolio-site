import { combineReducers } from "redux"
import imgLoad from './imgLoad/reducer'

export default function rootReducer() {
  return combineReducers({
    imgLoad,
  })
}