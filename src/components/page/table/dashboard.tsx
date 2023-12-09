import { getSchools } from '@/components/model/school'
import { columns } from './columns'
import { DataTable } from './data-table'

const Dashboard = () => {
  const data = getSchools()
  return (
    <div className="ml-56 p-8">
      <h2 className="text-3xl font-bold pb-4">Dashboard</h2>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Dashboard
