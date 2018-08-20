import {combineReducers} from 'redux'

import  todos  from './todos'
import displayFilter from './displayFilter'
export default combineReducers({
    todos,
    displayFilter
})