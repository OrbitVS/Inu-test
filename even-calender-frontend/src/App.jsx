import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Logins from './components/Login/Logins';
import Register from './components/Register/Register';
import Calander from './components/Calander/Calander';
import SelectedDatePage from './components/Calander/SelectedDatePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logins />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calander" element={< Calander/>} />
        <Route path="/selected-date/:date" element={<SelectedDatePage />} />

      </Routes>
    </Router>
  );
}

export default App;
