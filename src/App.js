import React from 'react';
import { CalendarProvider } from './contexts/CalendarContext';
// import CalendarPage from './pages/CalendarPage';
import CalendarPage from './pages/CalendarPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

const App = () => {
  return (
    <>
      <CalendarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<CalendarPage />} />
          </Routes>
        </Router>
      </CalendarProvider>
    </>
  );
};

export default App;

