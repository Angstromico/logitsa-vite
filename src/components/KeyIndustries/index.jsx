import { getKeyIndustriesInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'

const KeyIndustries = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getKeyIndustriesInfo(iDInfo))
  const { generateImgSrc, saveToLocalStorage } = useFunctions()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const KeyIndustries = data.page.data.attributes.KeyIndustries

  if (!KeyIndustries) return

  const { title, TitleImages } = KeyIndustries

  return (
    <div className='IndustriesContainer'>
      <h2>{title}</h2>
      <div className='gridIndustries'>
        {TitleImages.map((imgSample, index) => {
          const { title, image } = imgSample
          const url = generateImgSrc(image.data.attributes.url)

          return (
            <div className='imgContainer' key={title}>
              <a
                href='/key-industries'
                className='imgSample'
                style={{ backgroundImage: `url(${url})` }}
                onClick={() => saveToLocalStorage('IndexNumber', index)}
              >
                <h3>{title}</h3>
                <div className='underline'></div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default KeyIndustries
