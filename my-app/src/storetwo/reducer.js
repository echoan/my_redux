import {CHANGE_TEXT,ADD_TEXT,DEL_TEXT,GET_DATA} from './actionTypes'
const defaultValue = {
    textValue:"writehere",
    itemArr:[{"series_name":'Tom'},{"series_name":'JACK'}]
}
export default (state = defaultValue,action)=>{
    if(action.type === CHANGE_TEXT){
        const newState = JSON.parse(JSON.stringify(state))
        newState.textValue = action.value
        console.log(newState.textValue);
        return newState
    }
    if(action.type === ADD_TEXT){
        const newState = JSON.parse(JSON.stringify(state))
        newState.itemArr.push({"series_name":newState.textValue,'image':''})
        console.log(newState.itemArr);
        return newState
    }
    if(action.type === DEL_TEXT){
        const newState = JSON.parse(JSON.stringify(state))
        newState.itemArr.splice(action.index,1)
        console.log(newState.itemArr);
        return newState
    }
    if(action.type === GET_DATA){
        const newState = JSON.parse(JSON.stringify(state))
        newState.itemArr = action.data        
        console.log(newState.itemArr);
        return newState
    }
    return state
}