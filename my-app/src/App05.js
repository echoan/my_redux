import React from 'react';
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
const Item = List.Item;
// class App05 extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {};
// 	}
// 	render() {
// 		return (
// 			<div style={{ padding: '10px' }}>
// 				<WingBlank>
// 					<InputItem placeholder={this.props.textValue} onChange={this.props.changeText} />
// 					<WhiteSpace />
// 					<Button type="primary" onClick={this.props.addText}>
// 						按钮
// 					</Button>
// 					<WhiteSpace />
// 					<List className="my-list">
// 						{this.props.itemArr.map((item, i) => {
// 							return (
// 								<Item key={i} onClick={() => this.props.delText(i)}>
// 									<p>{item.series_name}</p>
// 									<img src={item.image} style={{ width: '100%', height: '100px' }} alt={item.image} />
// 								</Item>
// 							);
// 						})}
// 					</List>
// 				</WingBlank>
// 			</div>
// 		);
// 	}
// }

//以上创建的组件app05并没有自己的业务逻辑，因此类似这样的组件，更好的方式是可以将其定义为一个无状态组件，进一步提高性能
const App05 = (props) => {
	return (
		<div style={{ padding: '10px' }}>
			<WingBlank>
				<InputItem placeholder={props.textValue} onChange={props.changeText} />
				<WhiteSpace />
				<Button type="primary" onClick={props.addText}>
					按钮
				</Button>
				<WhiteSpace />
				<List className="my-list">
					{props.itemArr.map((item, i) => {
						return (
							<Item key={i} onClick={() => props.delText(i)}>
								<p>{item.series_name}</p>
								<img src={item.image} style={{ width: '100%', height: '100px' }} alt={item.image} />
							</Item>
						);
					})}
				</List>
			</WingBlank>
		</div>
	);
};

export default App05;
