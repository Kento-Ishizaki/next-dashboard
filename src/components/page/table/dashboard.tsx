'use client'
import { getSchools } from '@/components/model/school'
import { Props } from '../Dashboard.page'
import { columns } from './columns'
import { DataTable } from './data-table'

const Dashboard = ({ width }: Props) => {
  const data = getSchools()
  console.log(width)
  return (
    <div className={`ml-${width} p-8`}>
      <h2 className="text-3xl font-bold pb-4">Dashboard</h2>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default Dashboard
