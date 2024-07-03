  import React, {useState} from "react";
  
  function Time(){
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    
    function changeTime(){
        setTime(new Date().toLocaleTimeString())
    }

    setInterval(changeTime,1000)
    return(
        <h2>{time}</h2>

    )
}

export default Time;