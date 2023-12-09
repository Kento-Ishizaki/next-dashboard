import { Button } from '../ui/button'
import { Props } from './Dashboard.page'

const Dashboard = ({ width }: Props) => {
  return (
    <div className={`py-10 ml-${width}`}>
      <h2 className="text-3xl font-bold">Dashboard</h2>
      <Button className="bg-amber-500">click me</Button>
    </div>
  )
}

export default Dashboard
