import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home'
import BottomNav from './componenets/bottomNav';
import Market from './pages/market';
import Tips from './pages/tips';
import AddList from './pages/addList';
import DetailPage from './pages/detailPage';




function App() {
 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/market" element={<Market />} />
          <Route path="/add" element={<AddList />} />
          <Route path="/details/:id" element={<DetailPage} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  )
}

export default App
