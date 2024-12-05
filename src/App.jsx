import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'

import Container from './components/layout/Container'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Contact from './components/pages/Contact'
import Blog from './components/pages/Blog'
import BlogPost from './components/pages/BlogPost'

function App() {
  const RouteHandler = () => {
    const hash = useLocation().hash;

    if (hash) {
      const hashRoute = hash.substring(1) //remove '#' character
      return <Navigate to={hashRoute} replace />;
    }
  
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id" element={<BlogPost/>} />
        <Route path="*" element={<Home />} />
      </Routes>
    );
  };

  return (
    <Router basename='/portfolio'>
      <Container customClass="body">
      <Navbar/>
      <Container customClass="main">
        <RouteHandler />
      </Container>
      <Footer/>
      </Container>
    </Router>
  )
}

export default App
