import { CHANGE_DETAIL } from './actionTypes'
const defaultState = {
	title : '',
	date : '',
	content: ''
}
export default (state = defaultState,action) => {
	switch(action.type) {
		case CHANGE_DETAIL : 
		return {
			...state,
			...action.value
		}
		default : 
		return state
	}
}