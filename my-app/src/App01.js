import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import store from './store'
const Item = List.Item

class App01 extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(this.state);
        //当store的数据发生变化后来更新视图内容
        store.subscribe(this.storeChange)
    }
    render() { 
        return (<div style={{'padding':'10px'}}>
            <WingBlank>
                <InputItem placeholder={this.state.textValue} onChange={(e)=>this.changeText(e)}></InputItem>
                <WhiteSpace></WhiteSpace>
                <Button type="primary" onClick = {()=>this.addText()}>按钮</Button>
                <WhiteSpace></WhiteSpace>
                <List className="my-list">
                    {this.state.itemArr.map((item,i)=>{
                         return <Item key={i} onClick={()=>this.delText(i)}>{item}</Item>
                    })}
                </List>
            </WingBlank>
        </div>);
    }
    changeText=(e)=>{
        console.log(e)
        const action = {
            type:'change_Text',
            value:e
        }
        store.dispatch(action)
    }
    addText=()=>{
        console.log('123')
        const action = {
            type:'add_Text'
        }
        store.dispatch(action)
    }
    delText=(i)=>{
        console.log(i)
        const action = {
            type:'del_Text',
            index:i
        }
        store.dispatch(action)
    }
    storeChange=()=>{
        this.setState(store.getState());
    }
}
 
export default App01;