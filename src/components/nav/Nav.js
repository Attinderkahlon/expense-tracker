import React from "react"
// import Main from "../Main"
// import SideBar from "../SideBar"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <div className="max-w-6xl border-2  text-white border-red-500 h-full bg-slate-900 flex mx-auto">
        <div className="hidden sm:flex m-4 w-56 h-full flex-col gap-4">
          <h2 className="py-6">LOGO</h2>
          <Link to="/">Home</Link>
          <Link to="/nav/wallet">Wallet</Link>
          <Link to="/nav/profile">Profile</Link>

          <button
            id="menu-btn"
            className="block hamburger md:hidden focus:outline-hidden"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        <div className="md:hidden">
          <div
            id="menu"
            className="absolute flex flex-col items-center self-end   py-8 mt-10 space-y-6 font-bold  text-white border-red-500 bg-slate-900 sm:white sm:w-auto sm:self-center left-2 right-2 drop-shadow-sm"
          ></div>
        </div>
        {/* <Main />
        <SideBar /> */}
      </div>
    </>
  )
}

export default Nav
