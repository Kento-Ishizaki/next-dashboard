import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Dashboard from './table/dashboard'

export type Props = {
  width: number
}

const width = 56

const DashboardPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar width={width} />
      <Dashboard width={width} />
    </>
  )
}

export default DashboardPage
