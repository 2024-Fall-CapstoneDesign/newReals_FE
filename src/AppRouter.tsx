import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/intro/Intro';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import Market from './pages/market/Market';
import NewsDetail from './pages/newsDetail/NewsDetail';
import Profile from './pages/profile/Profile';
import Header from './components/common/header/Header';
import Register from './pages/register/Register';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/market" element={<Market />} />
        <Route path="/newsDetail/:id" element={<NewsDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
