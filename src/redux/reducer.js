import { ADDDATA } from "./actionTypes";
// import axios from "axios";
//  var x=[]
// axios.get("http://localhost:3001/data").then((res)=>{
//   res.data
// })

const init={
    data:[]
}

export const reducer =(store=init, action)=>{
    // console.log("REDUCER",action.payload)
    switch(action.type){
        case ADDDATA:{
            return {...store, data:[...store.data,...action.payload]};
        }
        default:
          return store;
    }
}