
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/home';
import About from './pages/about';
import Article from './pages/article';
import Friends from './pages/friends';

import LayoutFrame from './components/LayoutFrame';



function Router() {
  return (
    <div className="App">

      <BrowserRouter>
        <LayoutFrame>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/article" element={<Article />}></Route>
            <Route path="/friends" element={<Friends />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </LayoutFrame>

      </BrowserRouter>

    </div>
  )
}


export default Router