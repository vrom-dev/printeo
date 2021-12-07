import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Print } from './pages/Print'
import { Offers } from './pages/Offers'

export function App () {
  return (
    <Routes>
      <Route exact path="/print" element={<Print />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/offers" element={<Offers />} />
    </Routes>
  )
}
