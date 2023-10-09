import React, { useState } from 'react'
function text(isTextOne){
    if(isTextOne){
        return(<p>Before click</p>);
    }else{
        return(<p>After click</p>);
    }
}
const ToggleText = () => {
  const[isTextOne,setisTextOne]=useState(true);
  return (
    <div>
    <center>
    <button onClick={()=>setisTextOne(!isTextOne)}>click me</button>
    <p>
    {text(isTextOne)}
    </p>
    </center>
    </div>
  )
}

export default ToggleText