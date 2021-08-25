import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createRootReducer from './reducer'

export const store = createStore(createRootReducer(), applyMiddleware(thunkMiddleware))