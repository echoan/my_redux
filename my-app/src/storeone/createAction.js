import {CHANGE_TEXT,ADD_TEXT,DEL_TEXT} from './actionTypes'
export const changeText_one=(value)=>({
    type:CHANGE_TEXT,
    value
})
export const addText_one=()=>({
    type:ADD_TEXT
})
export const delText_one=(index)=>({
    type:DEL_TEXT,
    index
})