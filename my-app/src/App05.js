import React, { Component } from 'react'
import { List, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile';
const Item = List.Item
class App05 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={{'padding':'10px'}}>
            <WingBlank>
                <InputItem placeholder={this.props.textValue} onChange={(e)=>this.props.changeText(e)}></InputItem>
                <WhiteSpace></WhiteSpace>
                <Button type="primary" onClick = {()=>this.props.addText()}>按钮</Button>
                <WhiteSpace></WhiteSpace>
                <List className="my-list">
                    {this.props.itemArr.map((item,i)=>{
                         return <Item key={i} onClick={()=>this.props.delText(i)}>
                                <p>{item.series_name}</p>
                                <img src={item.image} style={{'width':'100%','height':'100px'}}  alt = {item.image}></img>
                         </Item>
                    })}
                </List>
            </WingBlank>
        </div>
        );
    }
}
 
export default App05;