import {LoginContext} from "../../../Context/LoginContext"
import { useContext } from "react"




const UsrLoginHead = () => {
  const {mode, setMode} = useContext(LoginContext)
  return (
    <div className='flex gap-16 mx-auto w-max'>

        <p onClick={() => setMode('login')} className={`text-3xl ${mode === "login" ? "text-red-500 border-b-4 border-red-500 font-medium" : "text-neutral-500 font-medium"}`}>Login</p>
        <p onClick={() => setMode('register')} className={`text-3xl ${mode === "register" ? "text-red-500 border-b-4 border-red-500 font-medium" : "text-neutral-500 font-medium"}`}>Register</p>

    </div>
  )
}

export default UsrLoginHead