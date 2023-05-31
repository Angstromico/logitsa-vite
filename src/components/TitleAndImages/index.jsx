import { getTitleAndImgesInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'

const TitleAndImages = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getTitleAndImgesInfo(iDInfo))
  const { generateImgSrc } = useFunctions()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const infoImages = data.page.data.attributes.InfoImages

  if (!infoImages) return

  const { title, content, TitleImages } = infoImages

  return (
    <div className='mainContainer'>
      <h2>{title}</h2>
      <p>{content}</p>
      <div className='titleImagesContainer'>
        {TitleImages.map((tAI) => {
          const { title, image } = tAI
          const url = generateImgSrc(image.data.attributes.url)

          return (
            <div
              key={title}
              className='imgContainer'
              style={{ backgroundImage: `url(${url})` }}
            >
              <h3>{title}</h3>
              <div className='underline'></div>
              <button type='button'>More information</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default TitleAndImages
