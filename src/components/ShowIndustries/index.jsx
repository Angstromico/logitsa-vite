import { useState } from 'react'
import { getKeyIndustriesInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'

const ShowIndustries = ({ iDInfo }) => {
  const { generateImgSrc, getFromLocalStorage, saveToLocalStorage } =
    useFunctions()
  const [selected, setSelected] = useState(getFromLocalStorage('IndexNumber'))
  const { loading, error, data } = useQuery(getKeyIndustriesInfo(iDInfo))

  const handleClick = (index) => {
    setSelected(index)
    saveToLocalStorage('IndexNumber', index)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const KeyIndustries = data.page.data.attributes.KeyIndustries

  if (!KeyIndustries) return

  const { title, TitleImages } = KeyIndustries

  return (
    <div className='IndustrieContainer second'>
      <h2>{title}</h2>
      <div className='optionsBar'>
        {TitleImages.map((info, index) => {
          const { title } = info

          return (
            <p
              key={index}
              className={selected === index ? 'selected' : ''}
              onClick={() => handleClick(index)}
            >
              {title}
            </p>
          )
        })}
      </div>
      <div className='showSection'>
        <div
          className='imgSample'
          style={{
            backgroundImage: `url(${generateImgSrc(
              TitleImages[selected].image.data.attributes.url
            )})`,
          }}
        ></div>
        <div className='textSample'>
          <p className='text-base md:text-lg'>
            {TitleImages[selected].content}
          </p>
        </div>
      </div>
    </div>
  )
}
export default ShowIndustries
