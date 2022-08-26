import Dashboard from '../pages/Dashboard'
import List from '../pages/List'
import Layout from '../components/Layout'
import { Routes, Route, useParams } from 'react-router-dom'

const DetailedListWrapper = () => {
  const { type } = useParams()
  return <List type={type} />
}

const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list/:type" element={<DetailedListWrapper />} />
      </Routes>
    </Layout>
  )
}

export default AppRoutes
