import React, { Component } from 'react'
import { Card } from 'antd';

export default class Detail extends Component {
	render() {
		const title = this.props.title + " (" + this.props.date + ")"
		return (
			<Card title = {title} style = {{marginTop:'15px'}}>
				<div dangerouslySetInnerHTML={{__html: this.props.content}}></div>
			</Card>
		)
	}
	componentDidMount() {
		fetch ('/api/detail.json?id=' + this.props.match.params.id)
		.then(res => res.json())
		.then(res =>{
			if(res && res.ret && res.data) {
				this.props.changeDetail(res.data)
			}
		})
	}
}