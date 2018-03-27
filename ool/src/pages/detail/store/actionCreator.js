import { CHANGE_DETAIL } from './actionTypes'
export const changeDetail = data => ( {
	type : CHANGE_DETAIL,
	value : {
		title : data.title,
		date : data.date,
		content : data.content
	}
})