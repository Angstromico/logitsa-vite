import CircleAndText from '@/components/CircleAndText'
import Card from '@/components/Card'
import CardCircle from '@/components/CardCircle'
import CardCircleProfile from '@/components/CardCircleProfile'
import CountCircle from '@/components/CountCircle'

const Examples = () => {
  return (
    <>
      <CircleAndText iDInfo={1} />
      <div className='flex justify-center w-full items-center my-16'>
        <Card iDInfo={2} />
      </div>
      <div className='flex justify-center w-full items-center my-16'>
        <CardCircle iDInfo={1} />
      </div>
      <div className='flex justify-center w-full items-center my-16'>
        <CardCircleProfile iDInfo={1} />
      </div>
      <div className='flex justify-center w-full items-center my-16'>
        <CountCircle idName={'idName'} iDInfo={1} />
      </div>
    </>
  )
}
export default Examples
