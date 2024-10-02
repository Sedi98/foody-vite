import React from 'react'



type Props = {
  text: string
  img: string
  clickFunc?: () => void
}

const SidebarItem:React.FC<Props> = ({text,img,clickFunc}) => {
  return (
    <div className='flex items-center gap-4 cursor-pointer group transition-all p-2' onClick={clickFunc}>
      <img className='w-6 h-6' src={img} alt="" />
      <p className='font-semibold text-neutral-500 text-lg m-0'>{text}</p>
    </div>
  )
}

export default SidebarItem