import { combineReducers } from 'redux'
import { reducer as headerReducer } from '../components/header/'
import { reducer as detailReducer } from '../pages/detail/'
import { reducer as homeReducer } from '../pages/home/'
const reducer = combineReducers({
	header : headerReducer,
	home : homeReducer,
	detail : detailReducer
})

export default reducer