import style from './style.module.scss'
import location from '@/assets/icons/location.png'

const locationInfo = [
  {
    index: 'lo',
    icon: location,
    url: '#',
    text: 'In front of San Juan Santamaría Intl Airport 50 meters west from fiesta Casino',
    text2: 'In front of Guanacaste Intl. Airport Solarium Logistic Center',
  },
]

export default function Location() {
  return (
    <div className={style.location}>
      <div className={style.whiteLine}></div>
      <div className={style.whiteLineLeft}></div>
      <div className={style.whiteLineRight}></div>
      {locationInfo.map(({ icon, url, index, name, text, text2 }) => (
        <div key={index} className={style.locationContainer}>
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className={style.link}
          >
            <img src={icon} className={style.icon} alt={name} />
            <p className='max-w-[250px] min-w-[250px] sm:min-w-[150px] px-1 text-center mb-5'>
              {text}
            </p>
            <p className='max-w-[250px] min-w-[250px] sm:min-w-[150px] px-1 text-center'>
              {text2}
            </p>
          </a>
        </div>
      ))}
    </div>
  )
}
