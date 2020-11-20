/*
 * @Author: chengya
 * @Description: Modify here please
 * @Date: 2020-11-19 20:53:33
 * @LastEditors: chengya
 * @LastEditTime: 2020-11-20 10:09:08
 */
import axios from 'axios';
export const getTodoList = () => {
	return (dispatch) => {
		axios
			.get('http://api.izhangchu.com/', {
				params: {
					methodName: 'CourseIndex',
					version: 4.4,
					user_id: 0,
					page: 1,
					size: 10
				}
			})
			.then((res) => {
				console.log(res.data.data.data);
				const data = res.data.data.data;
				const actions = getData_one(data);
				console.log(actions, 'actions');
				dispatch(actions);
			});
	};
};

function getData_one(data) {
	return {
		type: 'get_Data',
		data
	};
}
