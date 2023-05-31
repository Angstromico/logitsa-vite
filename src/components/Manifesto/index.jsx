import { getManifestoInfo } from '@/api/queries'
import { useQuery } from '@apollo/client'
import { useFunctions } from '@/Hooks'

const Manifesto = ({ iDInfo }) => {
  const { loading, error, data } = useQuery(getManifestoInfo(iDInfo))
  const { splitIntoParagraphs } = useFunctions()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const manifesto = data.page.data.attributes.Manifesto

  if (!manifesto) return

  const { title, content } = manifesto

  return (
    <div className='bgVintage'>
      <h2>{title}</h2>
      {splitIntoParagraphs(content)}
    </div>
  )
}
export default Manifesto
