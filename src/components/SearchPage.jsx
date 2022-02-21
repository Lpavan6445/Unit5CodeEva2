import Navbar from "./Navbar"
import {useEffect,useState } from "react"
import { useDispatch , useSelector } from "react-redux";
import {addData} from "../redux/action"
import axios from "axios"
import SingaPage from "./SinglePage"
const SearchPage =()=>{
    const data = useSelector((store)=>store.data)
    
    var dispatch = useDispatch()
    useEffect(()=>{
       getData()
    },[])
    const getData = ()=>{
        axios.get("http://localhost:3001/data").then((res)=> dispatch(addData(res.data)))
    }
    console.log(data)
    return <div>
           <Navbar/>
           <div>
               <div>
                   <button>Sort A-Z</button>
                   <button>Sort Z-A</button>
                   <button>Sort By Date (ASC)</button>
                   <button>Sort Z-A (DeSC)</button>
                   <button>Sort By Quality (ASC)</button>
                   <button>Sort Z-A Quality (DeSC)</button>
                   <button>Filter Explicit</button>
               </div>
         </div>
         <div id="search-result">
            {data.map((data)=>(
                <SingaPage data={data}/>
            ))}
          </div>
    </div>
}

export default SearchPage