const menus = [
  'ダッシュボード',
  'スクール',
  '施設',
  '送迎',
  'ユーザー',
  'ガイド',
]

const Sidebar = () => {
  return (
    <aside className={`absolute h-screen w-56 bg-cyan-500`}>
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
