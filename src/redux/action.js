import {ADDDATA} from "./actionTypes"

export const addData = (payload)=>{
    // console.log("action",payload)
    return {type:ADDDATA,
        payload:payload}
}