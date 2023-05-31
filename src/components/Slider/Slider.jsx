// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { useFunctions } from '@/Hooks'
import { Pagination, EffectFade, Autoplay } from 'swiper'
import SliderChild from './SliderChild'
import { getCarrouselInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Slider = ({ iDInfo }) => {
  const { loading, data, error } = useQuery(getCarrouselInfo(iDInfo))
  const { generateImgSrc } = useFunctions()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const carrouselInfo = data.page.data.attributes.Carrousel

  if (!carrouselInfo) return

  return (
    <div className='slider-container'>
      <Swiper
        direction={'vertical'}
        loop={true}
        speed={1000}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          position: 'left',
          type: 'bullets',
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        className='mySwiper'
      >
        {carrouselInfo.map((slider, index) => {
          const { title, content, image } = slider
          const { url } = image.data.attributes
          const slideUrlImg = generateImgSrc(url)
          return (
            <SwiperSlide key={index}>
              {
                <SliderChild
                  title={title}
                  content={content}
                  background={slideUrlImg}
                />
              }
            </SwiperSlide>
          )
        })}
      </Swiper>
      {carrouselInfo[0].link && (
        <a className='services-link' href={carrouselInfo[0].link}>
          See More <FontAwesomeIcon icon={faArrowRight} />
        </a>
      )}
    </div>
  )
}
