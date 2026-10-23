import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Header, Footer } from './ui'
import Home from './pages/Home'
import Learn from './pages/Learn'
import Hackathon from './pages/Hackathon'
import Colleges from './pages/Colleges'
import Mou from './pages/Mou'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return <><Header />
    <motion.main key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
      <Routes><Route path="/" element={<Home />} /><Route path="/learn" element={<Learn />} /><Route path="/hackathon" element={<Hackathon />} />
        <Route path="/colleges" element={<Colleges />} /><Route path="/mou" element={<Mou />} /><Route path="*" element={<Home />} /></Routes>
    </motion.main><Footer /></>
}
