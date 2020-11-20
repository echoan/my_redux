/*
 * @Author: chengya
 * @Description: 仓库
 * @Date: 2020-11-19 20:29:15
 * @LastEditors: chengya
 * @LastEditTime: 2020-11-20 10:07:10
 */
/*原来creatActions.js都是定义好的action，根本没办法写业务逻辑，有了Redux-thunk之后，
可以把App07.js中的componentDidMount业务逻辑放到这里来编写。也就是把向后台请求数据的代码放到那里。
那我们需要引入axios,并写一个新的函数方法。（以前的action是对象，现在的action可以是函数了，这就是redux-thunk带来的好处）
*/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './redecer';
const store = createStore(reducer, applyMiddleware(thunk));
export default store;
