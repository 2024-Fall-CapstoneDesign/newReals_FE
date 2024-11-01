import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Home from './pages/Home';
import Category from './pages/Category';
import Interest from './pages/Interest';
import Market from './pages/Market';
import NewsDetail from './pages/NewsDetail';
import Profile from './pages/Profile';
import Register from './pages/Register';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/interest" element={<Interest />} />
        <Route path="/market" element={<Market />} />
        <Route path="/newDetail/:id" element={<NewsDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
