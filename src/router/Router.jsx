import { Routes, Route } from 'react-router-dom'
import Examples from '@/pages/Examples'
import { GET_All_PAGES, generatePage } from '@/api/queries'
import { useQuery } from '@apollo/client'

const AppRouter = () => {
  const { loading, error, data } = useQuery(GET_All_PAGES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  const renderRoutes = () => {
    const routes = []
    data.pages.data.forEach((page) => {
      generatePage(routes, page)
    })
    return routes
  }

  return (
    <Routes>
      {renderRoutes()}
      <Route path='/examples' element={<Examples />} />
    </Routes>
  )
}

export default AppRouter
