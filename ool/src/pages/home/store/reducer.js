import * as actionTypes from './actionTypes'

const defaultState = {
	list : []
}

export default (state = defaultState,action) =>{
	switch (action.type) {
		case actionTypes.CHANGE_LIST :
		return {
			...state,
			list : action.value
		}
		default : 
		return state
	}
}