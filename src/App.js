import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import { createTheme, NextUIProvider } from "@nextui-org/react";
import AboutMe from './components/AboutMe';


const darkTheme = createTheme({
  type: 'dark',
});


function App() {

  return (

      <NextUIProvider theme={darkTheme}>
       <Router>
        <Navigation/>
          <Routes>
            <Route path="/" element={<AboutMe />} />
          </Routes>
        </Router>
      </NextUIProvider>
        
  );
}

export default App;
