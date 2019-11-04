import React, { Component } from 'react'
import store from './storetwo'
import {changeText_one,addText_one,delText_one,getData_one} from './storetwo/createAction'
import App05 from './App05'
import axios from 'axios'
//对于App03的进一步优化 组件与业务分离
class App04 extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(this.state);
        //当store的数据发生变化后来更新视图内容
        store.subscribe(this.storeChange)
    }
    render() { 
        return (<App05 textValue = {this.state.textValue} itemArr = {this.state.itemArr} changeText = {this.changeText} addText = {this.addText} delText = {this.delText}></App05>);
    }
    componentWillMount(){
        axios.get("http://api.izhangchu.com/",{
            params:{
                methodName:"CourseIndex",
                version:4.4,
                user_id:0,
                page:1,
                size:10
            }
        }).then((res)=>{
            console.log(res.data.data.data)
            const data = res.data.data.data
            const action = getData_one(data)
            store.dispatch(action)
        })
    }
    changeText=(e)=>{
        console.log(e)
        const action = changeText_one(e)
        store.dispatch(action)
    }
    addText=()=>{
        console.log('123')
        const action = addText_one()
        store.dispatch(action)
    }
    delText=(i)=>{
        console.log(i)
        const action = delText_one(i)
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState());
    }
}
 
export default App04;