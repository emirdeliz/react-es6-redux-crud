import { combineReducers } from 'redux'
import pagination from './pagination'
import vehicle from './vehicle'

const rootReducer = combineReducers({
    vehicle,
    pagination
})

export default rootReducer
