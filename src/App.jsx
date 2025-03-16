import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Location from './pages/locations/Location';
import ImgPage from './pages/img_card/ImgPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/location/:id' element={<Location />} />
        <Route path='/product/:id' element={<ImgPage />} />
      </Routes>
    </Router>
  );
}

export default App;
