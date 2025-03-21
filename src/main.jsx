import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Testimonials from './Testimonials.jsx'
import Price from './Price.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main>
      <Home />
      <About/>
      <Testimonials />
      <Price/>
      <Footer/>
    </main>
  </StrictMode>,
)
