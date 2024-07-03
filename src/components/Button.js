import React, {useState} from 'react'
function Button(){
    const [isOn, setIsOn] = useState(true)
    function handleClick(event){
        setIsOn(!isOn)

    }
    return <button onClick={handleClick}>{isOn? "on":"off"}</button>
    
}

export default Button
