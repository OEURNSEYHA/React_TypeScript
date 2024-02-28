
import Guest from "./Guest"

export const CustomComponent = (props: React.ComponentProps<typeof Guest>) => {
  return (
   <div>
       {props.isLoggedIn ? `Welcome ${props.name}` :  "Out"}
   </div>
  )
}
