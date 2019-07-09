import {combineReducers} from 'redux'
import todoReducer from './todoReducer.jsx'

const shopApp = combineReducers({
    todoReducer:todoReducer
})
export default shopApp
