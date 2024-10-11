import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Resident_SignIn from './pages/Resident_SignIn';
import Profile from './pages/Profile';
import Management_SignIn from './pages/Management_SignIn';
import Header from './components/Header';
import Home from './pages/Home';




export default function App() {
  return (<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ressignin" element={<Resident_SignIn />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/mansignin" element={<Management_SignIn />} />
    
  </Routes>
  </BrowserRouter>);
}
