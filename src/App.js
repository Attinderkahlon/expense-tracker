import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Nav from "./components/nav/Nav"
import SideBar from "./components/SideBar"
import Home from "./components/nav/Home"
import Profile from "./components/nav/Profile"
import Wallet from "./components/nav/Wallet"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/nav/home" element={<Home />} />
        <Route path="/nav/profile" element={<Profile />} />
        <Route />
        <Route path="/nav/wallet" element={<Wallet />} />
        <Route path="/*" element={<h1>Page not Found</h1>} />

        <Route path="/" element={<Main />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </>
  )
}

export default App
