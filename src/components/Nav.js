import React from "react"

const Nav = () => {
  return (
    <div className="w-full h-screen text-white">
      <div className="max-w-6xl border-2 border-red-500 h-full bg-slate-900 flex mx-auto">
        <div className="m-4 w-56 h-full flex flex-col gap-4">
          <h2 className="py-6">LOGO</h2>
          <h3>Home</h3>
          <h3>Analytics</h3>
          <h3>Wallet</h3>
          <h3>Profile</h3>
          <h3>Settings</h3>
          <h3>Activity</h3>
        </div>
      </div>
    </div>
  )
}

export default Nav
