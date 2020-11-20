/*
 * @Author: chengya
 * @Description: App06
 * @Date: 2020-11-19 20:27:36
 * @LastEditors: chengya
 * @LastEditTime: 2020-11-20 09:52:15
 */
import React from 'react';
import { List, WingBlank } from 'antd-mobile';
const { Item } = List;
const App06 = (props) => {
	return (
		<div style={{ padding: '10px' }}>
			<WingBlank>
				<List className="my-list">
					{props.itemArr.map((item, i) => {
						return (
							<Item key={i}>
								<p>
									{item.album}
									{item.series_name}
								</p>
							</Item>
						);
					})}
				</List>
			</WingBlank>
		</div>
	);
};

export default App06;
