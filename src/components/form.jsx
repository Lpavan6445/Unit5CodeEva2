import {useState, useEffect} from "react"

export const Form=()=>{
   const [gameData, UpdGamedata] = useState({
      "gamename": "",
      "gameauthor": "",
      "gameprice": "",
      "gametags": "",
      "forkids": false,
      "gamedesc": "",
      "gamerating": "",
   })
   let [totalData, getTotal] = useState([])
    
    useEffect(()=>{
      showData()
    },[])

    const showData=()=>{
      fetch('https://fake-server-pavan.herokuapp.com/games')
      .then(response=> response.json())
      .then((res)=> {
        getTotal(res)
      console.log(totalData)})
    }

     const change=(e)=>{
         if(e.target.name=== "gamename"){
            UpdGamedata({...gameData, gamename:e.target.value})
            console.log(gameData)
          }
          if(e.target.name=== "gameauthor"){
            UpdGamedata({...gameData, gameauthor:e.target.value})
            console.log(gameData)
          }
          if(e.target.name=== "gameprice"){
            UpdGamedata({...gameData, gameprice:e.target.value})
            console.log(gameData)
          }
          if(e.target.name=== "gametags"){
            UpdGamedata({...gameData, gametags:e.target.value})
            console.log(gameData)
          }
          if(e.target.name=== "gamedesc"){
            UpdGamedata({...gameData, gamedesc:e.target.value})
            console.log(gameData)
          }
          if(e.target.name=== "gamerating"){
            UpdGamedata({...gameData, gamerating:e.target.value})
            console.log(gameData)
          }
     }
  return(
     <>
     <form id="addgame" onSubmit={(e)=>{e.preventDefault()}}>
        <input name="gamename" type="text" placeholder="gamename" onChange={change}/>
        <input name="gameauthor" type="text" placeholder="gameauthor"  onChange={change}/>
        <input name="gametags" type="text" placeholder="gametags"  onChange={change}/>
        <input name="gameprice" type="number" placeholder="gameprice" onChange={change}/>
        <label >forkids</label>
        <input name="forkids" type="checkbox" placeholder="forkids" onChange={change}/>
        <input name="gamedesc " type="text" placeholder="gamedesc" onChange={change}/>
        <select name="gamerating" onChange={change}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
       <input type="submit" name="Submit" onClick={(e)=>{
         e.preventDefault()
         fetch('https://fake-server-pavan.herokuapp.com/games', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(gameData),
        }).then(showData)
       }}/>
       
    </form>
     <table>
       <thead>
         <tr>
            <td>gamename</td>
            <td>gameauthor</td>
            <td>gameprice</td>
            <td>gametags</td>
            <td>forkids</td>
            <td>gamedesc</td>
            <td>gamerating</td>
 
         </tr>
       </thead>
       <tbody>
         {totalData.map((e)=>(
            <tr className={"gamerow"}>
              {Object.keys(e).map((key)=>{
                if(key == "gameprice"){
                return <td className={"gameprice"}>{e[key]}</td>
              }else if(key === "gamerating"){
                return <td className={"gamerating"}>{e[key]}</td>
              }else{return<td>{e[key]}</td>}})}0
            </tr>
         ))}
       </tbody>
     </table>
   </>
  )

}
