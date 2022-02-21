import styled from "styled-components"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [inptText, setInput] = useState("")
  const navigate = useNavigate()
  const ChangeIninput = (e) => {
    setInput(e.target.value)
  }
  
  return <Home>
    <div>
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png" />
    </ div>
    <input onChange={ChangeIninput} onKeyDownCapture={(e)=>{e.key=="Enter"?navigate(`/search/?q=${inptText}`):"";}} className="search-box" type="text" placeholder="Search Google" />
  </Home>
}


const Home = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100vh;
    &>input{
        width:300px;
        padding:5px;
        border-radius:10px;
    }
`
export default Homepage