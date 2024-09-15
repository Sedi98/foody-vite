import { CircleFlag } from 'react-circle-flags'

const Flag = (): JSX.Element => {
  return (
    <span className='min-w-12'>
        <CircleFlag countryCode="gb" height="50" width="50" />
    </span>
  )
}

export default Flag