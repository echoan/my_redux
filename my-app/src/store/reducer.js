const defaultValue = {
    textValue:"writehere",
    itemArr:['hello world','goodbye world']
}
export default (state = defaultValue,action)=>{
    if(action.type === 'change_Text'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.textValue = action.value
        console.log(newState.textValue);
        return newState
    }
    if(action.type === 'add_Text'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.itemArr.push(newState.textValue)
        console.log(newState.itemArr);
        return newState
    }
    if(action.type === 'del_Text'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.itemArr.splice(action.index,1)
        console.log(newState.itemArr);
        return newState
    }
    return state
}