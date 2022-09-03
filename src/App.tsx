import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  )
}

const App2 = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="inicio" element={<Home />} />
    </Routes>
  </BrowserRouter>
)

export default App2
