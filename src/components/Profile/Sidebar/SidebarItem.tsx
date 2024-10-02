import React from 'react'



type Props = {
  text: string
  redImg: string
  img: string
  clickFunc?: () => void
  isActive?: boolean
}

const SidebarItem:React.FC<Props> = ({text,img,redImg,clickFunc,isActive}) => {
  return (
    <div className='flex items-center gap-4 cursor-pointer group transition-all p-2' onClick={clickFunc}>
      <img className='w-6 h-6' src={isActive ? redImg : img} alt="" />
      <p className={`font-semibold  ${isActive ? 'text-red-500' : 'text-neutral-500'} text-lg m-0`}>{text}</p>
    </div>
  )
}

export default SidebarItem