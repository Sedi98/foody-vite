import {LoginContext} from "../../../Context/LoginContext"
import { useContext } from "react"
import { useTranslation } from "react-i18next"




const UsrLoginHead = () => {
  const {mode, setMode} = useContext(LoginContext);
  const {t} = useTranslation();
  return (
    <div className='flex gap-16 mx-auto w-max'>

        <p onClick={() => setMode('login')} className={`text-3xl ${mode === "login" ? "text-red-500 border-b-4 border-red-500 font-medium" : "text-neutral-500 font-medium"}`}>{t('UserLoginTitle')}</p>
        <p onClick={() => setMode('register')} className={`text-3xl ${mode === "register" ? "text-red-500 border-b-4 border-red-500 font-medium" : "text-neutral-500 font-medium"}`}>{t('UserRegisterTitle')}</p>

    </div>
  )
}

export default UsrLoginHead