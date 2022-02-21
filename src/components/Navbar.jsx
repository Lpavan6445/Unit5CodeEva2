import styled from "styled-components"
const Navbar =()=>{
    return <Nav id="navbar">
             <div id="gIcon">
              <img width="50px" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"/>
            </ div>
             <input type="text" placeholder="Search Google"/>
              <button className="search">Search</button>
    </Nav>
}
const Nav = styled.div`
    display:flex;
    height:20px;
    flex-direction:row;
    border-bottom:2px solid white;
    padding:10px;
    input{
        width:300px;
        padding:5px;
        border-radius:10px;
    }
`
export default Navbar