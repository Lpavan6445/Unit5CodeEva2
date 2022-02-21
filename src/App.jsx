import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Homepage from "./components/Homepage"
// import Navbar from "./components/Navbar"
import SearchPage from "./components/SearchPage"
import {Route,Routes} from "react-router-dom"
function App() {

  return (
    <div className="App">
       
       <Routes>
         <Route path="/" element={<Homepage/>}/>
         <Route path="/search" element={<SearchPage/>}/>
         <Route path="/search/page/:id" element={<SearchPage/>}/>
       </Routes>
    </div>
  )
}

export default App
