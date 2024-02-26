// import React from 'react'

import { useEffect, useRef, useState } from "react"

function Multable() {
    const [timer, setTimer] = useState(0);
    const interValRef = useRef<number | null | undefined>(null);


    const stopTimer = () => {
        if(interValRef.current) window.clearInterval(interValRef.current);
    }

    useEffect(()=> {
        interValRef.current = window.setInterval(()=> {
            setTimer((timer)=> timer + 1)
        },1000)
        return () => {
            stopTimer();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
    <div>
        HookTimer : {timer}
        <button onClick={()=> stopTimer()}>Stop Timer</button>
    </div>
  )
}

export default Multable