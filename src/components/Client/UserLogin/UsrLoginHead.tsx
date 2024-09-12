


type Props = {
    active: string,
    click: (value:string) => any
}

const UsrLoginHead = ({active,click}:Props) => {
  return (
    <div className='flex gap-16 mx-auto w-max'>

        <p onClick={click('login')} className={`text-3xl ${active === "login" ? "text-red-500 border-b-4 font-medium" : "text-neutral-500 font-medium"}`}></p>
        <p onClick={click('register')} className={`text-3xl ${active === "register" ? "text-red-500 border-b-4 font-medium" : "text-neutral-500 font-medium"}`}></p>

    </div>
  )
}

export default UsrLoginHead