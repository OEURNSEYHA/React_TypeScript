// import React from 'react'

import { useEffect, useRef } from "react";

function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(()=> {
        inputRef.current?.focus();
    },[])
  return (
    <div>DomRef 
        <input type="text" ref={inputRef} />
    </div>
  )
}

export default DomRef