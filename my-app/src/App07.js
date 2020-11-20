/*
 * @Author: chengya
 * @Description: App07展示列表
 * @Date: 2020-11-19 20:34:17
 * @LastEditors: chengya
 * @LastEditTime: 2020-11-20 10:01:36
 */
import React, { Component } from 'react';
import store from './storethree';
import App06 from './App06';
import { getTodoList } from './storethree/createActions';
class App07 extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		//当store的数据发生变化后来更新视图内容
		store.subscribe(this.storeChange);
		console.log(this.state, '===============');
	}

	componentDidMount() {
		const actions = getTodoList();
		console.log(actions);
		store.dispatch(actions);
	}

	storeChange = () => {
		this.setState(store.getState(), () => console.log(this.state));
	};
	render() {
		return <App06 itemArr={this.state.itemArr} />;
	}
}

export default App07;
