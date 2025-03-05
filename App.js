import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/Signup';
import MainPage from './pages/MainPage';
import NotFound from './pages/NotFound';




const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>

  
);

export default App;
