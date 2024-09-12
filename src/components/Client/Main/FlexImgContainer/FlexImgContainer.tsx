import React from 'react'

type Props = {
    url: string
    alt: string
}

const FlexImgContainer = ({url,alt}: Props) => {
  return (
    <div className='w-full lg:w-1/2'>
        <img src={url} className="w-full" alt={alt} loading='lazy' />
    </div>
  )
}

export default FlexImgContainer