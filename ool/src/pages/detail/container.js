import { connect } from 'react-redux'
import Detail from './component'
import { changeDetail } from './store/actionCreator'

const mapState = state => ({
	title: state.detail.title,
	date: state.detail.date,
	content: state.detail.content
})

const mapDispath = dispatch => ({
	changeDetail(data) {
		
		const action = changeDetail(data)
		dispatch(action)
	}
})

export default connect(mapState, mapDispath)(Detail)