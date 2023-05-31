import { useCallback } from 'react'

export const useFunctions = () => {
  const isElementInViewport = useCallback((el) => {
    const rect = el.getBoundingClientRect()
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0
    return vertInView
  }, [])

  const splitIntoParagraphs = (text, align = '') => {
    const paragraphs = text.split(/\s{2,}/g)
    return paragraphs.map((paragraph, index) => (
      <p className={align} key={index}>
        {paragraph}
      </p>
    ))
  }
  const generateImgSrc = (url) => import.meta.env.VITE_APP_BACKEND_IMAGES + url

  const scrollDetect = useCallback(
    (id, onElementInView, parameter = null) => {
      const myElement = document.getElementById(id)
      if (!myElement) return
      window.addEventListener('scroll', () => {
        if (isElementInViewport(myElement)) {
          onElementInView(parameter)
        }
      })
    },
    [isElementInViewport]
  )

  const saveToLocalStorage = (key, value) => {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(key, value)
    }
  }

  const getFromLocalStorage = (key) => {
    const existingStore = localStorage.getItem(key)

    if (existingStore) {
      // If the store exists, parse the value and return it
      return JSON.parse(existingStore)
    } else {
      // If the store does not exist, return a default value of zero
      return 0
    }
  }

  return {
    splitIntoParagraphs,
    generateImgSrc,
    scrollDetect,
    saveToLocalStorage,
    getFromLocalStorage,
  }
}
