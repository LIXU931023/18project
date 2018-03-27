import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Provider } from 'react-redux'
import 'whatwg-fetch'
import { View as Header } from '../components/header/'
import { View as Home } from '../pages/home/'
import Detail from '../pages/detail/container'
import './reset.css'
import 'antd/dist/antd.css';
import styles from './style.mcss'
import store from '../store/'


class App extends Component {
  render() {
    return (
    	<Provider store={store}>
      <div className={styles.wrapper}>
      
      <BrowserRouter>
      <div>
            <Route path = '/'component = {Header}></Route>
        	<Switch>
        		<Route path = '/detail/:id' component = {Detail}></Route>
        		<Route path = '/' component = {Home}></Route>
        	</Switch>
        </div>
      </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
