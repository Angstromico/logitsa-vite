import { getCardInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import Button from './Button'
import TextSection from './TextSection'

const Index = ({ iDInfo, cardNumber = 0 }) => {
  const { loading, error, data } = useQuery(getCardInfo(iDInfo))
  const { generateImgSrc } = useFunctions()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const card = data.page.data.attributes.card[cardNumber]

  if (!card) return

  const { title, content, image, button } = card
  const { url, alternativeText } = image.data.attributes
  let src = generateImgSrc(url)

  return (
    <div className='max-w-sm shadow-lg text-white mx-auto mb-5'>
      <img className='w-full h-auto md:h-72' src={src} alt={alternativeText} />
      <div className='bg-gradient-to-b h-auto sm:h-[20rem] md:h-[26rem] from-carbonBlue to-[#7CB9E8] md:relative'>
        <TextSection props={{ title, content }} />
        <Button text={button} />
      </div>
    </div>
  )
}

export default Index
