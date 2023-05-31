import Logo from './Logo'
import ContactSection from './ContactSection'
import SocialSection from './SocialSection'
import LocationSection from './LocationSection'
import Map from './Map'

import style from './style.module.scss'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Logo />

      <div className={style.sectionMiddle}>
        <ContactSection />

        <SocialSection />

        <LocationSection />
      </div>

      <div className={style.mapContainer}>
        <Map />
      </div>
    </footer>
  )
}
