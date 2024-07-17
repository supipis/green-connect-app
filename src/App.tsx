import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/HomePage'
import BottomNav from './componenets/bottomNav';
import Market from './pages/MarketPage';
import Tips from './pages/TipsPage';
import AddList from './pages/AddListPage';
import DetailPage from './pages/DetailPage';
import EditListPage from './pages/EditListPage';
import PostTipPage from './pages/PostTipPage';
import LoginPage from './pages/LoginPage';
import DesktopNav from './componenets/desktopNav';




const App = () => {
  return (
    <Router>
      <div className="App">
      <div className="hidden md:block">
          <DesktopNav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/market" element={<Market />} />
          <Route path="/add" element={<AddList />} />
          <Route path="/details/:id" element={<DetailPage />} />
          <Route path="/edit/:id" element={<EditListPage />} />
          <Route path="/post" element={<PostTipPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <div className="block md:hidden">
          <BottomNav />
        </div>
      </div>
    </Router>
  )
}

export default App
