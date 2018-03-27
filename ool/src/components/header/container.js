import { connect } from 'react-redux'
import Header from './component'
import * as actionCreator from './store/actionCreator'
import { withRouter } from 'react-router-dom'
const mapStateToProps = (state) => ({
	data : state.header.data,
	menu : state.header.menu,
	list : state.header.list,
	show : state.header.show,
	top : state.header.top,
	showModal : state.header.showModal,
	isLogin : state.header.isLogin,
	isRegist : state.header.isRegist
})
const mapDispatchToProps = (dispatch) => ({
	changeList(data) {
		console.log(data)
		const action = actionCreator.changeList(data)
		dispatch(action)
	},
	openModal() {
		const action = actionCreator.openModal()
		dispatch(action)
	},
	hideModal() {
		const action = actionCreator.hideModal()
		dispatch(action)
	},
	logout(){
		const action = actionCreator.logout()
		dispatch(action)
	},
	getList(){
		const action = actionCreator.getList()
		 dispatch(action)
		 const action_one = actionCreator.getList()
		 dispatch(action_one)
		 const action_two = actionCreator.getList()
		 dispatch(action_two)
		 const action_three = actionCreator.getList()
		 dispatch(action_three)
	},
	
	cheackLogin(user,pass) {
		const action = actionCreator.cheackLogin(user,pass)
		dispatch(action)
	},
	// cheackRegist(user,pass) {
	// 	const action = actionCreator.cheackRegist(user,pass)
	// 	dispatch(action)
	// },
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))