import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import * as React from 'react';
import Navigation from './components/Navigation';
import { createTheme, NextUIProvider } from "@nextui-org/react";
import AboutMe from './components/AboutMe';





const darkTheme = createTheme({
  type: 'dark',
});


function App() {
  // 2. Use at the root of your app

  return (

      <NextUIProvider theme={darkTheme}>
       <Router>
        <Navigation/>
          <Routes>
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </Router>
      </NextUIProvider>
        
  );
}

export default App;
