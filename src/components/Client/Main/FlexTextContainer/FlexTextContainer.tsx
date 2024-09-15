import React from 'react'
import Title from '../../../Shared/Title/Title'
import Paragraph from '../../../Shared/Paragraph/Paragraph'


type Props = {
    title: string,
    text: string
}

const FlexTextContainer:React.FC<Props> = ({title,text}:Props) => {
  return (
    <div className='w-full lg:w-1/2  gap-12  flex flex-col items-center lg:items-start'>
        <Title text={title} variation="hero" />
        <Paragraph text={text} variation="hero" />
    </div>
  )
}

export default FlexTextContainer