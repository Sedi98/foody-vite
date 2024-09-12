import React from 'react'
import Title from '../../../Shared/Title/Title'
import Paragraph from '../../../Shared/Paragraph/Paragraph'




type Props = {
    url: string
    title: string
    text: string
}
const HomeCard: React.FC<Props> = ({url, title, text}: Props) => {
  return (
    <div className='flex flex-col gap-5 text-center pb-6 shadow-xl'>
        <img width={'240'} height={'240'} className='mx-auto h-[240px]' src={url} alt="" />
        <Title text={title} variation="card" />
        <Paragraph text={text} variation="card" />
    </div>
  )
}

export default HomeCard