import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Notification from './Notification';
import Profile from './Profile';
import Create from './Create';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Notification" element={<Notification />} />
          <Route path="profile" element={<Profile />} />
          <Route path="Create" element={<Create />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);