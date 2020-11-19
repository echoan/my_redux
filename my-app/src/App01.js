import React, { Component } from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
//引入store
import store from './store';
const Item = List.Item;

class App01 extends Component {
	constructor(props) {
		super(props);
		//获取到store中的数据给当前实例使用
		this.state = store.getState();
		console.log(this.state);
		//当store的数据发生变化后来更新视图内容
		store.subscribe(this.storeChange);
	}
	render() {
		return (
			<div style={{ padding: '10px' }}>
				<WingBlank>
					<InputItem placeholder={this.state.textValue} onChange={this.changeText} />
					<span>{this.state.textValue}</span>
					<WhiteSpace />
					<Button type="primary" onClick={this.addText}>
						按钮
					</Button>
					<WhiteSpace />
					<List className="my-list">
						{this.state.itemArr.map((item, i) => {
							return (
								<Item key={i} onClick={() => this.delText(i)}>
									{item}
								</Item>
							);
						})}
					</List>
				</WingBlank>
			</div>
		);
	}

	//input框的onchange事件
	changeText = (e) => {
		console.log(e);
		const action = {
			type: 'change_Text',
			value: e
		};
		store.dispatch(action);
	};

	//按钮事件
	addText = () => {
		console.log('123');
		const action = {
			type: 'add_Text'
		};
		store.dispatch(action);
	};

	//列表的删除
	delText = (i) => {
		console.log(i);
		const action = {
			type: 'del_Text',
			index: i
		};
		store.dispatch(action);
	};

	//当store里面的数据发生改变后更新当前实例的state，进而来更新视图
	storeChange = () => {
		this.setState(store.getState());
	};
}

export default App01;
