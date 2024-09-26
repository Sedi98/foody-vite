import { CircleFlag } from 'react-circle-flags'
import { useState } from 'react'

const Flag = (): JSX.Element => {
  const [show, setShow] = useState(false)
  return (
    <>
    <span className='min-w-12 relative'>
      <div className="" onClick={() => setShow(!show)}>
      <CircleFlag countryCode="gb" height="50" width="50" />
      </div>
       

        <span className={`absolute top-16 -left-2 flex flex-col gap-4 w-max bg-white  px-2 py-4  shadow-lg z-10   ${show ? 'block' : 'hidden'}`}>
            <CircleFlag countryCode="az" height="50" width="50" />
            <CircleFlag countryCode="ru" height="50" width="50" />
        </span>
    </span>
    </>
    
  )
}

export default Flag