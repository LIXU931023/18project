import React,{ Component } from 'react'
import { withRouter } from 'react-router'
import { Row,Col,Menu,Icon,Form,Button,Modal,Input } from 'antd'
import styles from './style.mcss'
const FormItem = Form.Item;
 class Header extends Component{
	render(){
			const { getFieldDecorator } = this.props.form;
			const logo = require('../../assets/img/logo.png')
			
			const menuItems = this.props.top.map((item,index) =>{
				
				return (
					<Menu.Item key={item.id} className={styles.item}>
	          			<Icon type="appstore" />{item.title}
	        		</Menu.Item>
				)
			})
			const menulist_one = this.props.list.map((item,index) =>{
				
				return (

					<li key = {item.id} >
						{item.title}
					</li>
				)
			})
			const menulist_two = this.props.show.map((item,index) =>{
				
				return (

					<li key = {item.id} className={styles.no_style}>
						{item.title}
					</li>
				)
			})
			const menulist_three = this.props.menu.map((item,index) =>{
				
				return (

					<li key = {item.id} className={styles.no_style}>
						{item.title}
					</li>
				)
			})
			
		let button = null
			
		if (this.props.isLogin) {
			
			button = <Button type="primary" style={{marginTop: '20px'}} onClick={this.props.logout}>退出</Button>
		}else {
			
			button = <Button type="primary" style={{marginTop: '20px'}} onClick={this.props.openModal}>登陆</Button>
		}
		return (
			<div>
				<Row>
				<Col span={4}>
				<img  alt = "" src={logo} onClick={this.handleClick.bind(this)} className={styles.logo}/>
					</Col>
				<Col span={16}>
				<Menu mode = "horizontal">
				{menuItems}
				</Menu>
				</Col>
				<Col span = {2}>
					{button}
				</Col>
				<Col span = {2}>
					<Button type="primary" style={{marginTop: '20px'}} onClick={this.props.openModal}>注册</Button>
				</Col>
				</Row>
				<Modal
					title = "登录"
					visible = {this.props.showModal}
					onOk = {this.handelSubmit.bind(this)}
					onCancel = {this.props.hideModal}
					cancelText = "取消"
					okText = "登录"
				>
				<Form onSubmit = {this.handelSubmit} className="login-form">
				<FormItem>
					{getFieldDecorator('user',{
						rules : [{required : true,message : '请填写用户名'}],
					})(
						<Input prefix = {<Icon type = "user" style={{color:'rgba(0,0,0,.25)'}} />} placeholder = "Username" />
					)}	
				</FormItem>
				<FormItem>
			          {getFieldDecorator('password', {
			            rules: [{ required: true, message: '请填写密码' }],
			          })(
			            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
			          )}
			        </FormItem>
			     </Form>
			    </Modal>
				<Row className = {styles.middle}>
					<Col span={2} className= {styles.inside} className={styles.min_left}>常速英语</Col>
					<Col span={11} className= {styles.inside}>讲课定积分</Col>
					<Col span={11} className= {styles.inside}>绿卡品牌考虑</Col>
				</Row>
					<div>
					<Row>
					<Col span={2} className = {styles.seted}>
						{menulist_one}
					</Col>
					<Col span={11} className = {styles.setting}>
						{menulist_two}
					</Col>
					<Col span={11} className = {styles.setting}>
						{menulist_three}
					</Col>
					</Row>
					</div>
			</div>
			)
	}
	componentDidMount(){
		
		this.props.getList()
		
	}
	handleClick() {
		this.props.history.push('/')
	}
	handelSubmit(){
		this.props.form.validateFields((err,values)=>{
			if(!err) {
				console.log(values.user,values.password)
				this.props.cheackLogin(values.user,values.password)
			}
		})
	}
}
	
	export default Form.create()(Header);
	