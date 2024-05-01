import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'

function App() {
  return (
    <Router basename='/portfolio'>
      <Container customClass="body">
      <Navbar/>
      <Container customClass="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Container>
      <Footer/>
      </Container>
    </Router>
  )
}

export default App
