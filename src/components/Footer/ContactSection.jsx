import mail from '@/assets/icons/mail.png'
import phone from '@/assets/icons/phone.png'
import style from './style.module.scss'

const contact = [
  {
    index: 'ph',
    icon: phone,
    url: '#',
    text: 'San Jóse (506) 2441-3700',
    text2: 'Liberia (506) 2668-0043',
  },
  { index: 'mail', icon: mail, url: '#', text: 'info@logitsa.com' },
]

export default function ContactSection() {
  return (
    <div className={style.contactSection}>
      <div className={style.whiteLine}></div>
      {contact.map(({ icon, url, index, text, text2 }) => (
        <div key={index} className={style.contactContainer}>
          <div>
            <a
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              className={style.link}
            >
              <img src={icon} className={style.icon1} alt={index} />
            </a>
          </div>
          <p>{text}</p>
          {text2 && <p>{text2}</p>}
        </div>
      ))}
    </div>
  )
}
