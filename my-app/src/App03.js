import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import store from './storetwo'
import {changeText_one,addText_one,delText_one,getData_one} from './storetwo/createAction'
import axios from 'axios'
const Item = List.Item
//对于App02的进一步优化 添加axio与redux的使用
class App03 extends Component {
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
                         return <Item key={i} onClick={()=>this.delText(i)}>
                                <p>{item.series_name}</p>
                                <img src={item.image} style={{'width':'100%','height':'100px'}}></img>
                         </Item>
                    })}
                </List>
            </WingBlank>
        </div>);
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
 
export default App03;