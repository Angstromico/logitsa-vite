import { getCardProfileInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'
import TextSection from './TextSection'
import SocialsSection from './SocialsSection'

const Index = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getCardProfileInfo(iDInfo))
  const { generateImgSrc } = useFunctions()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const cardCircleProfile = data.page.data.attributes.cardCircleProfile[0]

  if (!cardCircleProfile) return

  const { title, name, image, linkedin, mail } = cardCircleProfile
  const { url, alternativeText } = image.data[0].attributes
  let src = generateImgSrc(url)
  return (
    <div className='max-w-sm rounded mx-auto mb-5 text-bluePalette'>
      <img
        className='mx-auto w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-[50%] shadow-lg object-cover'
        src={src}
        alt={alternativeText}
      />
      <div className='mt-5  rounded flex flex-col justify-center items-center shadowCustom'>
        <TextSection props={{ title, name }} />
        <SocialsSection props={{ linkedin, mail }} />
      </div>
    </div>
  )
}

export default Index
