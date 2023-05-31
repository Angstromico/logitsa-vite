import style from './style.module.scss'
import facebook from '@/assets/icons/facebook.png'
import instagram from '@/assets/icons/instagram.png'
import linkedin from '@/assets/icons/linkedin.png'

const socials = [
  { index: 'fb', icon: facebook, url: '#', name: 'Facebook' },
  { index: 'ig', icon: instagram, url: '#', name: 'Instagram' },
  { index: 'lkd', icon: linkedin, url: '#', name: 'Linkedin' },
]

export default function SocialSection() {
  return (
    <div className={style.socialMedia}>
      <div className={style.whiteLine}></div>
      <div className={style.socials}>
        {socials.map(({ icon, url, index, name }) => (
          <div key={index} className={style.iconContainer}>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className={style.link}
            >
              <img src={icon} className={style.icon2} alt={name} />{' '}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
