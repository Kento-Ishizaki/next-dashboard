import { Props } from './Dashboard.page'

const menus = [
  'ダッシュボード',
  'スクール',
  '施設',
  '送迎',
  'ユーザー',
  'ガイド',
]

const Sidebar = ({ width }: Props) => {
  return (
    <aside className={`absolute h-screen w-${width} bg-sky-400`}>
      <div className="flex flex-col text-white font-bold divide-y">
        {menus.map((menu) => (
          <div key={menu} className="flex items-center h-14 pl-4">
            {menu}
          </div>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
