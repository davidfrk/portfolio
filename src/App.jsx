import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './components/layout/Container'
import Home from './components/pages/Home'

function App() {
  return (
    <Router>
      <Container customClass="body">
      <h1>Portfolio</h1>
      <Container customClass="main">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<Home/>}/>
        </Routes>
      </Container>
      <code>code</code><span>span</span>
      </Container>
    </Router>
  )
}

export default App
