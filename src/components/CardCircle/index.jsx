import { getCircleTextInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import TextSection from './TextSection'

const Index = ({ iDInfo = 1, cardNumber = 0 }) => {
  const { loading, error, data } = useQuery(
    getCircleTextInfo(iDInfo, 'cardCircle')
  )
  const { generateImgSrc } = useFunctions()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const cardNumb = data.page.data.attributes.cardCircle[cardNumber]

  if (!cardNumb) return

  const { title, content, image } = cardNumb
  const { url, alternativeText } = image.data.attributes
  let src = generateImgSrc(url)

  return (
    <div className='max-w-sm rounded overflow-hidden mx-auto mb-5'>
      <img
        className={`mx-auto w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-[50%] shadow-lg object-cover ${
          title === 'PASSION' ? 'rotate-90' : ''
        }`}
        src={src}
        alt={alternativeText}
      />

      <div className='mt-4'>
        <TextSection props={{ title, content }} />
      </div>
    </div>
  )
}

export default Index
