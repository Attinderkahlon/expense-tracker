import { Route, Routes } from "react-router-dom"
import Main from "./components/Main"
import Nav from "./components/Nav"
import SideBar from "./components/SideBar"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </>
  )
}

export default App
