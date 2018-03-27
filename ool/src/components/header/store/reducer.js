import * as actionTypes from './actionTypes'
const defaultState = { 
 	data : {},
 	menu : [],
 	list : [],
 	show : [],
 	top : [],
 	showModal : false,
 	isLogin : false,
 	isRegist : false
 }
 export default (state = defaultState,action) => {
 	switch (action.type) {
 		case actionTypes.CHANGE_LIST :
	 		return{
	 			...state,
	 			data : action.value,
	 			menu : action.value.list_three,
	 			list : action.value.list_one,
	 			show : action.value.list_two,
	 			top :  action.value.list,

	 		}
 		case actionTypes.OPEN_MODAL:
 			return {
 				...state,
 				showModal : true
 			}
 		case actionTypes.HIDE_MODAL :
 			return {
 				...state,
 				showModal : false
 			}
 		case actionTypes.LOGIN :
 			return {
 				...state,
 				isLogin : true,
 				showModal : false
 			}
 		case actionTypes.LOGOUT :
 			return {
 				...state,
 				isLogin : false
 			}
 		case actionTypes.REGIST :
 			return {
 				...state,
 				isRegist : true,
 				showModal : false
 			}
 		default :
 		return state
 	}

 }