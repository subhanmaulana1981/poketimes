// import logo from './logo.svg';
// import './App.css';

import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoPage from './components/NoPage';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />      
        </Routes>
    </BrowserRouter>
  );
}

export default App;
