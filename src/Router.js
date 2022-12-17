
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './components/Home';
import About from './components/About';



function Router() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default Router