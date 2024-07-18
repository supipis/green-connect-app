import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/HomePage'
import BottomNav from './componenets/bottomNav';
import Market from './pages/MarketPage';
import Tips from './pages/TipsPage';
import AddList from './pages/AddListPage';
import DetailPage from './pages/detailPage';
import EditListPage from './pages/EditListPage';
import PostTipPage from './pages/PostTipPage';
import DesktopNav from './componenets/desktopNav';
import { AuthProvider } from './auth/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import api from './auth/api';
import LoginForm from './auth/LoginForm';
import AuthLayout from './auth/AuthLayout';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        const { data } = await api.get(queryKey[0]);
        return data;
      },
    },
  },
});

function ProtectedRoute({ children }) {
  const { auth } = useAuth();

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

const App = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>

    <Router>
      <div className="App">
       <div className="hidden md:block">
          <DesktopNav />
        </div> 
        <Routes>
          <Route path="/tips" element={<Tips />} />
          <Route path="/market" element={<Market />} />
          <Route path="/login" element={<LoginForm />} />
          <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddList />} />
            <Route path="/details/:id" element={<DetailPage />} />
            <Route path="/edit/:id" element={<EditListPage />} />
            <Route path="/post" element={<PostTipPage />} />
          </Route>
        </Routes>
        <div className="block md:hidden">
          <BottomNav />
        </div>
      </div>
    </Router>
    </QueryClientProvider>
    </AuthProvider>

  )
}

export default App
