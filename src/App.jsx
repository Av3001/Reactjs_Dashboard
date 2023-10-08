
import Navbar from "./components/Pages/Navbar.jsx"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Pages/Layout'
import Home from "./components/Pages/Home.jsx"
import Contact from "./components/Pages/Contact.jsx"
import LoginReg from "./components/Pages/auth/LoginReg.jsx"
 
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<LoginReg/>}/>

        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
