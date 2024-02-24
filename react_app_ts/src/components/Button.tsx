import Input from "./Input"

type ButtonProps = {
    handleClick : (e: React.MouseEvent<HTMLButtonElement>, id:number) => void
}


function Button({handleClick} : ButtonProps) {
  return (
  <>
  
  <button onClick={(e)=> handleClick(e, 20)}> Click </button>
  <Input  handleChange={(value)=> console.log( value)}/>
  </> 
  )
}

export default Button