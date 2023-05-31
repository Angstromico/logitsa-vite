import { getPageInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import CircleAndText from '@/components/CircleAndText'
import CountCircles from '@/components/CountCircles'
import TitleAndImages from '@/components/TitleAndImages'
import KeyIndustries from '@/components/KeyIndustries'
import ShowIndustries from '@/components/ShowIndustries'
import CardContainer from '@/components/CardContainer'
import Form from '@/components/Form'
import Manifesto from '@/components/Manifesto'
import CardsSquareContainer from '@/components/CardsSquareContainer'
import { Slider } from '@/components/Slider'

const Page = ({ iDInfo, title }) => {
  const { loading, error, data } = useQuery(getPageInfo(iDInfo))

  const checkCondition = (component) => {
    try {
      if (component.length > 0 || component.title) return true
    } catch (error) {
      // console.log(error)
    }
    return false
  }
  const keyOrShowIndustries = (component) => {
    if (checkCondition(component)) {
      try {
        if (component.MainPage) {
          return 'show'
        }
      } catch (error) {
        // console.log(error)
      }
      return 'key'
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const pageInfo = data.page.data.attributes

  return (
    <>
      {checkCondition(pageInfo.Carrousel) && <Slider iDInfo={iDInfo} />}
      {keyOrShowIndustries(pageInfo.KeyIndustries) === 'show' && (
        <ShowIndustries iDInfo={iDInfo} />
      )}
      {checkCondition(pageInfo.textCircle) && <CircleAndText iDInfo={iDInfo} />}
      {pageInfo.Manifesto && <Manifesto iDInfo={iDInfo} />}

      {checkCondition(pageInfo.CountCircle) && <CountCircles iDInfo={iDInfo} />}

      {checkCondition(pageInfo.InfoImages) && (
        <TitleAndImages iDInfo={iDInfo} />
      )}

      {keyOrShowIndustries(pageInfo.KeyIndustries) === 'key' && (
        <KeyIndustries iDInfo={iDInfo} />
      )}
      {checkCondition(pageInfo.cardCircle) && <CardContainer iDInfo={iDInfo} />}
      {checkCondition(pageInfo.card) && (
        <CardsSquareContainer iDInfo={iDInfo} title={title} />
      )}
      {checkCondition(pageInfo.secondTextCircle) && (
        <CircleAndText
          iDInfo={iDInfo}
          second='secondTextCircle'
          iD={'second'}
        />
      )}
      {checkCondition(pageInfo.Form) && <Form iDInfo={iDInfo} />}
    </>
  )
}
export default Page
