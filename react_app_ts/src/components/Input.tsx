// import React from 'react'

// e: React.ChangeEvent<HTMLInputElement>,
type InputProps = {
    // value: string,
    handleChange: ( value: string) => void
}


function Input({ handleChange} : InputProps ) {
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(e)
    // }
    return (
   <>
    <input type="text" onChange={(value)=>{handleChange(value.target.value)}} />
   </>
  )
}

export default Input