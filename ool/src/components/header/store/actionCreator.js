import * as actionTypes from './actionTypes'
// import axios from 'axios'
export const changeList = value =>({
	type : actionTypes.CHANGE_LIST,
	value : value
})
export const openModal = () =>({
	type : actionTypes.OPEN_MODAL
})

export const hideModal = () =>({
	type : actionTypes.HIDE_MODAL
})

export const login = () =>({
	type : actionTypes.LOGIN
})

export const logout = () =>({
	type : actionTypes.LOGOUT
})

export const regist = () =>({
	type : actionTypes.REGIST
})
export const getList = () =>{
	return (dispatch) =>{
		fetch('/api/header.json')
		.then(res =>res.json())
		.then(res =>{
			if(res && res.ret && res.data) {
				console.log(res.data)
				const action = changeList(res.data)
				dispatch(action)
				
			}
		})
	}
}


export const cheackLogin = (user,pass) =>{
	return (dispatch) => {
		fetch('/apm/login',{
    		method:"post",
    		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
  			},
    		body : JSON.stringify({username: user, psw : pass}) 
		}).then(res=>res.json())
		.then(res =>{
			
			if(res.status===1){
				const action = login()
				dispatch(action)
			}
		})
		.catch( res =>{
			console.log(res)
		})	
	}
}
// export const cheackRegist = (user,pass) =>{
// 	return (dispatch) => {
// 		fetch('/apm/regist',{
//     		method:"post",
//     		headers: {
//     		'Accept': 'application/json',
//     		'Content-Type': 'application/json',
//   			},
//     		body : JSON.stringify({username: user, psw : pass}) 
// 		}).then(res =>{
// 			console.log(res)
// 			if(res.status===1) {
// 				const action = regist()
// 				dispatch(action)
// 				alert("注册成功！")
				
// 			}
// 		}).catch( res=>{
// 			console.log(res)
// 		})
		
		
// 	}
// }