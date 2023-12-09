const Navbar = () => {
  return (
    <div className="bg-white w-screen">
      <div className="flex justify-between shadow h-16 items-center">
        <div className="pl-4 text-2xl cursor-pointer">ロゴ</div>
        <div className="flex justify-end space-x-10 pr-10">
          <div>ユーザー名</div>
          <div>設定</div>
          <div>ログアウト</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
