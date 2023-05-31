import Card from '@/components/Card'

const CardsSquareContainer = ({
  iDInfo,
  cardNumbers = [0, 1, 2, 3],
  title,
}) => {
  return (
    <div className='card-containers'>
      <div className='max-w-screen-3xl w-full px-2 mx-auto my-8  gap-4 cards'>
        <h2 className='title'>{title}</h2>
        <div className='flex flex-wrap justify-center'>
          {cardNumbers.map((c) => {
            return <Card key={c} iDInfo={iDInfo} cardNumber={c} />
          })}
        </div>
      </div>
    </div>
  )
}
export default CardsSquareContainer
