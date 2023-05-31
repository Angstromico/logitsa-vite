import style from './style.module.scss'
import { useState, useEffect, useCallback } from 'react'
import { useFunctions } from '@/Hooks'
import { getCircleTextInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'

export default function Index({ iDInfo, second = 'textCircle', iD = 'first' }) {
  const { loading, error, data } = useQuery(getCircleTextInfo(iDInfo, second))
  const { splitIntoParagraphs, generateImgSrc, scrollDetect } = useFunctions()
  const [showImage, setShowImage] = useState('')
  const [srcImage, setSrcImage] = useState('')
  const [marginTop, setMarginTop] = useState('')
  let src = ''

  const handleElementInView = useCallback(() => {
    setShowImage(style.slideToView)
  }, [])

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        if (iD !== 'first') return
        const slider = document.querySelector('.slider-container')
        !slider ? setMarginTop('7rem') : setMarginTop('')
      }, [400])
      scrollDetect(iD, handleElementInView)
      setSrcImage(src)
    }
  }, [scrollDetect, iD, loading, src, handleElementInView])
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  const textCircle = data.page.data.attributes[second]

  if (!textCircle) return
  const { title, content, image } = textCircle
  const { url, alternativeText } = image.data.attributes
  src = generateImgSrc(url)

  return (
    <div className='w-full relative'>
      <h2
        className={`${
          iD === 'first' ? 'hidden' : ''
        } font-bold text-center  text-2xl md:text-6xl text-carbonBlue mt-4 md:mt-20`}
      >
        {title}
      </h2>
      <div className={style.cContainer} style={{ marginTop }}>
        <div className={style.circleImage}>
          <div
            className={`${iD === 'first' ? style.circle : style.biggerCircle}`}
          ></div>
          <img
            className={`${showImage} ${iD === 'first' ? '' : style.biggerImg}`}
            id={iD}
            src={srcImage}
            alt={alternativeText}
          />
        </div>
        <div className={style.textContainer}>
          <h2 className={`${iD !== 'first' ? 'hidden mb-0 mt-0' : ''}`}>
            {title}
          </h2>
          {splitIntoParagraphs(content)}
        </div>
      </div>
    </div>
  )
}
