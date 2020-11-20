/*
 * @Author: chengya
 * @Description: Modify here please
 * @Date: 2020-11-19 20:37:20
 * @LastEditors: chengya
 * @LastEditTime: 2020-11-20 09:53:42
 */
const defaultValue = {
	itemArr: [ { album: 'first', series_name: 'hello world' }, { album: 'end', series_name: 'good world' } ]
};

export const reducer = (state = defaultValue, action) => {
	if (action.type === 'get_Data') {
		let newState = JSON.parse(JSON.stringify(state));
		newState.itemArr = action.data;
		return newState;
	}
	return state;
};
