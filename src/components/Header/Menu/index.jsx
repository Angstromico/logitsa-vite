import { useState, useCallback, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { GET_MENU_ITEMS } from '@/api/queries'
import style from './style.module.scss'
import logo from '@/assets/img/logo.png'
import HamburgerButton from './HamburguerButton'

export default function Menu() {
  const [color, setColor] = useState('')
  const [isToggled, setIsToggled] = useState(false)
  const [bColor, setBColor] = useState('#2c2c5c')
  const [isHidden, setIsHidden] = useState(true)
  const [btnWidth, setBtnWidth] = useState('4rem')
  const [hiddenMobileLinks, setHiddenMobileLinks] = useState(true)
  const [paddingBottom, setPaddingBottom] = useState('')

  const { loading, error, data } = useQuery(GET_MENU_ITEMS)

  const changeBackground = useCallback((f, firsColor, secondColor) => {
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY
      if (scrollPosition >= 500) {
        f(firsColor)
      } else {
        f(secondColor)
      }
    })
  }, [])

  const handleToggle = () => {
    setIsToggled(!isToggled)
    setIsHidden(!isHidden)
  }

  const handleBurguer = () => {
    setHiddenMobileLinks(!hiddenMobileLinks)
    if (!paddingBottom) setPaddingBottom('7rem')
    if (paddingBottom) setPaddingBottom('')
  }

  const getButtonWidth = useCallback(() => {
    try {
      const buttonWidth = document.getElementById(
        'dropdownDefaultButton'
      ).offsetWidth
      if (buttonWidth) {
        setBtnWidth(`${buttonWidth}px`)
      }
    } catch (error) {
      //
    }
  }, [])

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        const slider = document.querySelector('.slider-container')
        !slider
          ? setColor('#2c2c5c')
          : changeBackground(setColor, '#2c2c5c', '')
        if (slider) {
          setBColor('#6385c3')
          changeBackground(setBColor, '#2c2c5c', '#6385c3')
        }
        getButtonWidth()
      }, [400])
    }
  }, [loading, changeBackground, getButtonWidth])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :</p>

  const menuData = data.headerLink.data.attributes.links

  return (
    <nav
      className={style.menu}
      style={{ backgroundColor: color, paddingBottom: paddingBottom }}
    >
      <a href='/'>
        <img src={logo} alt='Logo' className={style.logo} />
      </a>

      <div className='block sm:hidden relative'>
        <div onClick={handleBurguer}>
          <HamburgerButton />
        </div>

        <ul className={`${hiddenMobileLinks ? 'hidden ' : style.itemsMobile}`}>
          {menuData.map((item) => (
            <li key={item.name + item.id}>
              {!item.children && <a href={item.href}>{item.title}</a>}
              {item.children && (
                <div
                  className='relative'
                  onMouseLeave={handleToggle}
                  onMouseEnter={handleToggle}
                >
                  <button
                    className={`text-white ${
                      !isToggled
                        ? 'bg-transparent'
                        : bColor === '#2c2c5c'
                        ? 'bg-[#2c2c5c]'
                        : 'bg-[#6385c3]'
                    } inline-flex items-center px-3 py-1.5 rounded`}
                    id='dropdownDefaultButton'
                    data-dropdown-toggle='dropdown'
                    type='button'
                  >
                    {item.title}{' '}
                    <svg
                      className={`w-4 h-4 ml-2 ${
                        !isToggled ? '' : 'rotate-180'
                      } transition-all`}
                      aria-hidden='true'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M19 9l-7 7-7-7'
                      ></path>
                    </svg>
                  </button>
                  <div
                    id='dropdown'
                    className={`z-10 ${
                      isHidden ? 'hidden' : ''
                    } bg-cBlue shadow`}
                  >
                    <ul
                      className={`bg-[${bColor}] items-center px-3 py-1.5 rounded text-center absolute top-7 left-0`}
                      aria-labelledby='dropdownDefaultButton'
                      style={{ width: btnWidth }}
                    >
                      {item.children.map((innerItem, index) => {
                        const { title, href } = innerItem

                        return (
                          <li key={index}>
                            <a className='py-2 block' href={href}>
                              {title}
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <ul className={style.items}>
        {menuData.map((item) => (
          <li key={item.id + item.title}>
            {!item.children && <a href={item.href}>{item.title}</a>}
            {item.children && (
              <div
                className='relative'
                onMouseLeave={handleToggle}
                onMouseEnter={handleToggle}
              >
                <button
                  className={`text-white ${
                    !isToggled
                      ? 'bg-transparent'
                      : bColor === '#2c2c5c'
                      ? 'bg-[#2c2c5c]'
                      : 'bg-[#6385c3]'
                  } inline-flex items-center px-3 py-1.5 rounded`}
                  id='dropdownDefaultButton'
                  data-dropdown-toggle='dropdown'
                  type='button'
                >
                  {item.title}{' '}
                  <svg
                    className={`w-4 h-4 ml-2 ${
                      !isToggled ? '' : 'rotate-180'
                    } transition-all`}
                    aria-hidden='true'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M19 9l-7 7-7-7'
                    ></path>
                  </svg>
                </button>
                <div
                  id='dropdown'
                  className={`z-10 ${isHidden ? 'hidden' : ''} bg-cBlue shadow`}
                >
                  <ul
                    className={`bg-[${bColor}] items-center px-3 py-1.5 rounded text-center absolute top-7 left-0`}
                    aria-labelledby='dropdownDefaultButton'
                    style={{ width: btnWidth }}
                  >
                    {item.children.map((innerItem, index) => {
                      const { title, href } = innerItem

                      return (
                        <li key={index}>
                          <a className='py-2 block' href={href}>
                            {title}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
